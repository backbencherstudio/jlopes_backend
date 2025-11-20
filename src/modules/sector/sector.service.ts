import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectorService {
  constructor(private readonly prisma: PrismaService) {}

  async createSector(createSectorDto: CreateSectorDto) {
    try {
      const isSectorExists = await this.prisma.sector.findUnique({
        where: {
          name: createSectorDto.name,
        },
      });
      if (isSectorExists) {
        throw new ConflictException('SEctor already exists');
      }

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

  async findOne(id: string) {
    try {
      const result = await this.prisma.sector.findFirst({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Sector is retrieved successfully',
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

  async update(id: string, updateSectorDto: UpdateSectorDto) {
    try {
      const isSectorExists = await this.prisma.sector.findUnique({
        where: {
          id,
        },
      });
      if (!isSectorExists) {
        throw new NotFoundException('Sector does not exist');
      }

      const result = await this.prisma.sector.update({
        where: { id },
        data: {
          ...updateSectorDto,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Sector is updated successfully',
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
      const isSectorExists = await this.prisma.sector.findUnique({
        where: {
          id,
        },
      });
      if (!isSectorExists) {
        throw new NotFoundException('Sector does not exist');
      }

      const result = await this.prisma.sector.delete({
        where: { id },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Sector is removed successfully',
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
