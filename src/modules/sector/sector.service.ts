import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectorService {
  constructor(private readonly prisma: PrismaService) {}

  async createSector(createSectorDto: CreateSectorDto) {
    try {
      const result = await this.prisma.sector.create({
        data: createSectorDto,
      });
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Sector is created successfully',
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

  async findAllSectors(page: number, limit: number) {
    try {
      const [result, totalCount] = await this.prisma.$transaction([
        // Implement Pagination
        this.prisma.sector.findMany({
          take: limit,
          skip: (page - 1) * limit,
        }),

        // Count the records
        this.prisma.sector.count(),
      ]);

      // Calculate total pages
      const totalPages = Math.ceil(totalCount / limit);

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'All sectors are retrieved successfully',
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
    return `This action returns a #${id} sector`;
  }

  update(id: number, updateSectorDto: UpdateSectorDto) {
    return `This action updates a #${id} sector`;
  }

  remove(id: number) {
    return `This action removes a #${id} sector`;
  }
}
