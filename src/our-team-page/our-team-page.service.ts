import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOurTeamPageDto } from './dto/create-our-team-page.dto';
import { UpdateOurTeamPageDto } from './dto/update-our-team-page.dto';

@Injectable()
export class OurTeamPageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOurTeamPageDto) {
    try {
      const result = await this.prisma.team.create({
        data: {
          name: data.name,
          title: data.title,
          description: data.description,
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

  findAll() {
    return `This action returns all ourTeamPage`;
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
