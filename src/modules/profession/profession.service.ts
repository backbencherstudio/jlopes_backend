import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@Injectable()
export class ProfessionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfessionDto: CreateProfessionDto) {
    try {
      const isProfessionExists = await this.prisma.profession.findUnique({
        where: {
          name: createProfessionDto.name,
        },
      });
      if (isProfessionExists) {
        throw new ConflictException('Profession already exists');
      }

      const result = await this.prisma.profession.create({
        data: createProfessionDto,
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Profession is created Successfully',
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

  async findAll() {
    try {
      const [result, totalCount] = await this.prisma.$transaction([
        // Implement pagination
        this.prisma.profession.findMany({

        }),

        // Count the records
        this.prisma.profession.count(),
      ]);

      // const result = await this.prisma.profession.findMany();
      // const totalCount = await this.prisma.profession.count();


      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'All Professors are retrieved successfully',
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
      const result = await this.prisma.profession.findMany({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Profession is retrieved Successfully',
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

  /* 
  Error Alert:
  =============
  Too many database connections opened
  */
  async update(id: string, updateProfessionDto: UpdateProfessionDto) {
    try {
      const isProfessorExists = await this.prisma.profession.findUnique({
        where: {
          id,
        },
      });
      if (!isProfessorExists) {
        throw new NotFoundException('Profession does not exist');
      }

      const result = await this.prisma.profession.update({
        where: {
          id,
        },
        data: {
          ...updateProfessionDto,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Profession is updated Successfully',
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

  remove(id: string) {
    return `This action removes a #${id} profession`;
  }
}
