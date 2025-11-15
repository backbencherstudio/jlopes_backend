import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdvisorDto } from './dto/create-advisor.dto';
import { UpdateAdvisorDto } from './dto/update-advisor.dto';

@Injectable()
export class AdvisorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdvisorDto: CreateAdvisorDto) {
    try {
      // Check if the email already exists
      const existingAdvisor = await this.prisma.advisor.findUnique({
        where: {
          email: createAdvisorDto.email,
        },
      });
      if (existingAdvisor) {
        throw new ConflictException('Email already exists');
      }

      // Create advisor with state categories using transaction
      const result = await this.prisma.$transaction(async (prisma) => {
        const advisor = await prisma.advisor.create({
          data: {
            name: createAdvisorDto.name,
            email: createAdvisorDto.email,
            phone: createAdvisorDto.phone,
            stateCategories: {
              create: createAdvisorDto.stateCategories.map((category) => ({
                state: category.state,
                zip: category.zip,
              })),
            },
          },
          include: {
            stateCategories: true,
          },
        });

        return advisor;
      });

      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'Advisor is created successfully',
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
        // Implement pagination
        this.prisma.advisor.findMany({
          include: {
            stateCategories: true,
          },
          orderBy: {
            created_at: 'desc',
          },
        }),

        // Count the records
        this.prisma.advisor.count(),
      ]);

      // Calculate total pages
      const totalPages = Math.ceil(totalCount / limit);

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Alll team members are retrieved successfully',
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
    return `This action returns a #${id} advisor`;
  }

  update(id: number, updateAdvisorDto: UpdateAdvisorDto) {
    return `This action updates a #${id} advisor`;
  }

  remove(id: number) {
    return `This action removes a #${id} advisor`;
  }
}
