import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { StringHelper } from 'src/common/helper/string.helper';
import { SojebStorage } from 'src/common/lib/Disk/SojebStorage';
import appConfig from 'src/config/app.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(private readonly prisma: PrismaService) {}

  async createTestimonials(
    createTestimonialDto: CreateTestimonialDto,
    images: Express.Multer.File[],
  ) {
    try {
      const data: any = {};

      if (createTestimonialDto.howWeHelped) {
        data.howWeHelped = createTestimonialDto.howWeHelped;
      }
      if (createTestimonialDto.gapGuardian) {
        data.gapGuardian = Array.isArray(createTestimonialDto.gapGuardian)
          ? createTestimonialDto.gapGuardian
          : [createTestimonialDto.gapGuardian];
      }

      if (createTestimonialDto.result) {
        data.result = createTestimonialDto.result;
      }
      if (createTestimonialDto.footer_title) {
        data.footer_title = createTestimonialDto.footer_title;
      }
      if (createTestimonialDto.name) {
        data.name = createTestimonialDto.name;
      }
      if (createTestimonialDto.bio) {
        data.bio = createTestimonialDto.bio;
      }

      if (images && images.length > 0) {
        const filenames: string[] = [];

        for (const image of images) {
          // upload file
          const filename = `${StringHelper.randomString()}${image.originalname}`;
          await SojebStorage.put(
            appConfig().storageUrl.avatar + filename,
            image.buffer,
          );

          filenames.push(filename);
        }
        data.image = filenames;
      }

      const result = await this.prisma.testimonial.create({
        data: {
          ...data,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'Testimonial is created successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  async findAllTestimonials(page: number, limit: number) {
    try {
      const [result, totalCount] = await this.prisma.$transaction([
        // Implement Pagination
        this.prisma.testimonial.findMany({
          take: limit,
          skip: (page - 1) * limit,
        }),

        // Count the records
        this.prisma.testimonial.count(),
      ]);

      // Calculate total page
      const totalPages = Math.ceil(totalCount / limit);

      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'All Testimonials are retrieved successfully',
        metaData: {
          currentPage: page,
          totalPages,
          totalCount,
          limit,
        },
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.prisma.testimonial.findUnique({
        where: { id },
      });
      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'Testimonial is retrieved successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  async update(
    id: string,
    updateTestimonialDto: UpdateTestimonialDto,
    images: Express.Multer.File[],
  ) {
    try {
      const data: any = {};

      const existingTestimonial = await this.prisma.testimonial.findUnique({
        where: {
          id,
        },
      });
      if (!existingTestimonial) {
        throw new NotFoundException('Testimonial not found');
      }

      if (updateTestimonialDto.howWeHelped) {
        data.howWeHelped = updateTestimonialDto.howWeHelped;
      }
      if (updateTestimonialDto.gapGuardian) {
        data.gapGuardian = Array.isArray(updateTestimonialDto.gapGuardian)
          ? updateTestimonialDto.gapGuardian
          : [updateTestimonialDto.gapGuardian];
      }

      if (updateTestimonialDto.result) {
        data.result = updateTestimonialDto.result;
      }
      if (updateTestimonialDto.footer_title) {
        data.footer_title = updateTestimonialDto.footer_title;
      }
      if (updateTestimonialDto.name) {
        data.name = updateTestimonialDto.name;
      }
      if (updateTestimonialDto.bio) {
        data.bio = updateTestimonialDto.bio;
      }

      if (images && images.length > 0) {
        const filenames: string[] = [];

        if (existingTestimonial.image && existingTestimonial.image.length > 0) {
          for (const oldImageName of existingTestimonial.image) {
            try {
              await SojebStorage.delete(
                appConfig().storageUrl.image + oldImageName,
              );
            } catch (error) {
              return {
                success: false,
                statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
                message: error?.message || 'Error deleting old image',
              };
            }
          }
        }

        for (const image of images) {
          // upload file
          const filename = `${StringHelper.randomString()}${image.originalname}`;
          await SojebStorage.put(
            appConfig().storageUrl.image + filename,
            image.buffer,
          );

          filenames.push(filename);
        }
        data.image = filenames;
      }

      const result = await this.prisma.testimonial.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Testimonial is updated successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  async remove(id: string) {
    try {
      const existingTestimonial = await this.prisma.testimonial.findUnique({
        where: {
          id,
        },
      });
      if (!existingTestimonial) {
        throw new NotFoundException('Testimonial not found');
      }

      const result = await this.prisma.testimonial.delete({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Testimonial is updated successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }
}
