import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicServDto } from './dto/create-public-serv.dto';
import { UpdatePublicServDto } from './dto/update-public-serv.dto';

@Injectable()
export class PublicServService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPublicServDto: CreatePublicServDto) {
    try {
      const isPublicServExists =
        await this.prisma.publicServPrivateWealth.findUnique({
          where: {
            email: createPublicServDto.email,
          },
        });
      if (isPublicServExists) {
        throw new ConflictException('Public Serve already exists');
      }

      const result = await this.prisma.publicServPrivateWealth.create({
        data: createPublicServDto,
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Public Serve is created successfully',
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

  async findAll(page: number, limit: number) {
    try {
      const [result, totalCount] = await this.prisma.$transaction([
        // Implement Pagination
        this.prisma.publicServPrivateWealth.findMany({
          include: {
            sector: true,
          },
          take: limit,
          skip: (page - 1) * limit,
        }),

        // Count the records
        this.prisma.publicServPrivateWealth.count(),
      ]);

      // Calculate total pages
      const totalPages = Math.ceil(totalCount / limit);

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'All Public Serves are retrieved successfully',
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
      const result = await this.prisma.publicServPrivateWealth.findUnique({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Public Serve is retrieved successfully',
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

  async update(id: string, updatePublicServDto: UpdatePublicServDto) {
    try {
      const isPublicServExists =
        await this.prisma.publicServPrivateWealth.findUnique({
          where: {
            id,
          },
        });
      if (!isPublicServExists) {
        throw new ConflictException('Public Serve does not exist');
      }

      const result = await this.prisma.publicServPrivateWealth.update({
        where: {
          id,
        },
        data: {
          ...updatePublicServDto,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Public Serve is updated successfully',
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
      const isPublicServExists =
        await this.prisma.publicServPrivateWealth.findUnique({
          where: {
            id,
          },
        });
      if (!isPublicServExists) {
        throw new ConflictException('Public Serve does not exist');
      }

      const result = await this.prisma.publicServPrivateWealth.delete({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Public Serve is removed successfully',
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
