import { HttpStatus, Injectable } from '@nestjs/common';
import { StringHelper } from 'src/common/helper/string.helper';
import { SojebStorage } from 'src/common/lib/Disk/SojebStorage';
import appConfig from 'src/config/app.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOurTeamPageDto } from './dto/create-our-team-page.dto';
import { UpdateOurTeamPageDto } from './dto/update-our-team-page.dto';

@Injectable()
export class OurTeamPageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTeamDTO: CreateOurTeamPageDto,
    image: Express.Multer.File,
  ) {
    try {
      const data: any = {};
      if (createTeamDTO.name) {
        data.name = createTeamDTO.name;
      }
      if (createTeamDTO.title) {
        data.title = createTeamDTO.title;
      }
      if (createTeamDTO.description) {
        data.description = createTeamDTO.description;
      }

      if (image) {
        // upload file
        const filename = `${StringHelper.randomString()}${image.originalname}`;
        await SojebStorage.put(
          appConfig().storageUrl.avatar + filename,
          image.buffer,
        );

        data.avatar = filename;
      }

      const result = await this.prisma.team.create({
        data: {
          ...data,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'Team member is created successfully',
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
        this.prisma.team.findMany({
          take: limit,
          skip: (page - 1) * limit,
        }),

        // Count the records
        this.prisma.team.count(),
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

  async findOne(id: string) {
    try {
      const result = await this.prisma.team.findUnique({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Team member is retrieved successfully',
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

  async update(id: string, updateOurTeamPageDto: UpdateOurTeamPageDto) {
    try {
      const exists = await this.prisma.team.findUnique({
        where: { id },
      });

      if (!exists) {
        return {
          success: false,
          message: 'Team member not found',
        };
      }

      const result = await this.prisma.team.update({
        where: { id },
        data: {
          ...updateOurTeamPageDto,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Team member is updated successfully',
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
      const exists = await this.prisma.team.findUnique({
        where: { id },
      });

      if (!exists) {
        return {
          success: false,
          message: 'Team member not found',
        };
      }

      const result = await this.prisma.team.delete({
        where: {
          id,
        },
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Team member is deleted successfully',
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
