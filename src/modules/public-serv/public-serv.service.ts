import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicServDto } from './dto/create-public-serv.dto';
import { UpdatePublicServDto } from './dto/update-public-serv.dto';

@Injectable()
export class PublicServService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPublicServDto: CreatePublicServDto) {
    try {
      const result = await this.prisma.publicServPrivateWealth.create({
        data: createPublicServDto,
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Public Serve is deleted successfully',
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

  findOne(id: number) {
    return `This action returns a #${id} publicServ`;
  }

  update(id: number, updatePublicServDto: UpdatePublicServDto) {
    return `This action updates a #${id} publicServ`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicServ`;
  }
}
