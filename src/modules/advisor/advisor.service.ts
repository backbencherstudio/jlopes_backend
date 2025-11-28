import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findAll() {
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
          // take: limit,
          // skip: (page - 1) * limit,
        }),

        // Count the records
        this.prisma.advisor.count(),
      ]);

      // Calculate total pages
      const totalPages = Math.ceil(totalCount / 0); // limit is 0 for now

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'All advisors are retrieved successfully',
        // metaData: {
        //   currentPage: page,
        //   totalPages,
        //   totalCount,
        //   limit,
        // },
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

  async findOne(email: string) {
    try {
      const result = await this.prisma.advisor.findUnique({
        where: {
          email: email,
        },
        include: {
          stateCategories: true,
        },
      });
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Advsior is retrieved successfully',
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

  async update(id: string, updateAdvisorDto: UpdateAdvisorDto) {
    try {
      // Check if the advisor exists
      const existingAdvisor = await this.prisma.advisor.findUnique({
        where: {
          id,
        },
      });
      if (!existingAdvisor) {
        throw new NotFoundException('Advsior is not found');
      }

      // Check if the email is unique while updating
      if (
        updateAdvisorDto.email &&
        updateAdvisorDto.email !== existingAdvisor.email
      ) {
        const existingEmail = await this.prisma.advisor.findUnique({
          where: {
            email: updateAdvisorDto.email,
          },
        });
        if (existingEmail) {
          throw new ConflictException('Email already exists');
        }
      }

      // Update the state category
      const updatedStateCategory = updateAdvisorDto.stateCategories
        .filter((category) => category.id)
        .map((category) => {
          return this.prisma.stateCategory.update({
            where: {
              id: category.id,
            },
            data: {
              state: category.state,
              zip: category.zip,
            },
          });
        });

      // Update Advisor and State Category together
      await this.prisma.$transaction([
        this.prisma.advisor.update({
          where: {
            id,
          },
          data: {
            name: updateAdvisorDto.name,
            email: updateAdvisorDto.email,
            phone: updateAdvisorDto.phone,
          },
        }),
        ...updatedStateCategory,
      ]);

      const result = await this.prisma.advisor.findUnique({
        where: {
          id,
        },
        include: {
          stateCategories: true,
        },
      });
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Advsior is updated successfully',
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
      // Check if the advisor exists
      const existingAdvisor = await this.prisma.advisor.findUnique({
        where: {
          id,
        },
      });
      if (!existingAdvisor) {
        throw new NotFoundException('Advsior is not found');
      }

      const result = await this.prisma.advisor.delete({
        where: { id },
        include: {
          stateCategories: true,
        },
      });
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Advsior is deleted successfully',
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
