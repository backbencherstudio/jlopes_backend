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
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdvisorService } from './advisor.service';
import { CreateAdvisorDto } from './dto/create-advisor.dto';
import { UpdateAdvisorDto } from './dto/update-advisor.dto';

@ApiTags('Advisor')
@Controller('advisors')
export class AdvisorController {
  constructor(private readonly advisorService: AdvisorService) {}

  @ApiOperation({ summary: 'Create a advisor with state categories' })
  @Post()
  async create(@Body() createAdvisorDto: CreateAdvisorDto) {
    try {
      return await this.advisorService.create(createAdvisorDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get all advisors' })
  @Get()
  async findAll(@Query() query: any) {
    try {
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 3;
      return await this.advisorService.findAll(page, limit);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get single advisor' })
  @Get(':email')
  async findOne(@Param('email') email: string) {
    try {
      return await this.advisorService.findOne(email);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Update advisor' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdvisorDto: UpdateAdvisorDto,
  ) {
    try {
      return this.advisorService.update(id, updateAdvisorDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Delete advisor' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.advisorService.remove(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }
}
