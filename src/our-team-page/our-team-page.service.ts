import { Injectable } from '@nestjs/common';
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
        message: 'Team member is created successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  async findAll(page: number, limit: number) {
    console.log("🚀 ~ OurTeamPageService ~ findAll ~ limit:", limit)
    console.log("🚀 ~ OurTeamPageService ~ findAll ~ page:", page)
    
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
      const totalpages = Math.ceil(totalCount / limit);

      return {
        success: true,
        message: 'Alll team members are successfully',
        metaData: {
          currentPage: page,
          totalpages,
          totalCount,
          limit,
        },
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} ourTeamPage`;
  }

  update(id: number, updateOurTeamPageDto: UpdateOurTeamPageDto) {
    return `This action updates a #${id} ourTeamPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} ourTeamPage`;
  }
}
