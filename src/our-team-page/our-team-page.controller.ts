import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { memoryStorage } from 'multer';
import { CreateOurTeamPageDto } from './dto/create-our-team-page.dto';
import { UpdateOurTeamPageDto } from './dto/update-our-team-page.dto';
import { OurTeamPageService } from './our-team-page.service';
import { Request } from 'express';
@ApiTags('teams')
@Controller('teams')
export class OurTeamPageController {
  constructor(private readonly ourTeamPageService: OurTeamPageService) {}

  @ApiOperation({ summary: 'Create a team member' })
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
    }),
  )
  async create(
    @Body() data: CreateOurTeamPageDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    try {
      return await this.ourTeamPageService.create(data, image);
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get all team members' })
  @Get()
  async findAll(@Query() query: any, @Req() req: Request) {
    try {
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 3;
      return await this.ourTeamPageService.findAll(page, limit);
    } catch (error) {
      return {
        success: false,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get single team member' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourTeamPageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOurTeamPageDto: UpdateOurTeamPageDto,
  ) {
    return this.ourTeamPageService.update(+id, updateOurTeamPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourTeamPageService.remove(+id);
  }
}
