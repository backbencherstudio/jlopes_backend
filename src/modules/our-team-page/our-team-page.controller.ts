import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { memoryStorage } from 'multer';
import { CreateOurTeamPageDto } from './dto/create-our-team-page.dto';
import { UpdateOurTeamPageDto } from './dto/update-our-team-page.dto';
import { OurTeamPageService } from './our-team-page.service';
@ApiTags('Team')
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
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get all team members' })
  @Get()
  async findAll(@Query() query: any) {
    try {
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 3;
      return await this.ourTeamPageService.findAll(page, limit);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get single team member' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.ourTeamPageService.findOne(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Update team member' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOurTeamPageDto: UpdateOurTeamPageDto,
  ) {
    try {
      return await this.ourTeamPageService.update(id, updateOurTeamPageDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Remove team member' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.ourTeamPageService.remove(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }
}
