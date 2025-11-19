import { Injectable } from '@nestjs/common';
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
        message: 'Testimonial is created successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  findAll() {
    return `This action returns all testimonials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testimonial`;
  }

  update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    return `This action updates a #${id} testimonial`;
  }

  remove(id: number) {
    return `This action removes a #${id} testimonial`;
  }
}
