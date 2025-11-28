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
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { SectorService } from './sector.service';

@ApiTags('Sector')
@Controller('sectors')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @ApiOperation({ summary: 'Create Sector' })
  @Post()
  async create(@Body() createSectorDto: CreateSectorDto) {
    try {
      return await this.sectorService.createSector(createSectorDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get All Sectors' })
  @Get()
  async findAll(@Query() query: any) {
    try {
      return await this.sectorService.findAllSectors();
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get a Sector' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.sectorService.findOne(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Update Sector' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSectorDto: UpdateSectorDto,
  ) {
    try {
      return this.sectorService.update(id, updateSectorDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Delete Sector' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.sectorService.remove(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }
}
