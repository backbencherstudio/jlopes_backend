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
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ProfessionService } from './profession.service';

@ApiTags('Profession')
@Controller('professions')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @ApiOperation({ summary: 'Create Profession' })
  @Post()
  async create(@Body() createProfessionDto: CreateProfessionDto) {
    try {
      return await this.professionService.create(createProfessionDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get All Professions' })
  @Get()
  async findAll(@Query() query: any) {
    try {
      return await this.professionService.findAll();
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get Single Professor' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.professionService.findOne(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Update Professor' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfessionDto: UpdateProfessionDto,
  ) {
    try {
      return await this.professionService.update(id, updateProfessionDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionService.remove(id);
  }
}
