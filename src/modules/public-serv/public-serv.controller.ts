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
import { CreatePublicServDto } from './dto/create-public-serv.dto';
import { UpdatePublicServDto } from './dto/update-public-serv.dto';
import { PublicServService } from './public-serv.service';

@ApiTags('PublicServ Private Wealth')
@Controller('public-servs')
export class PublicServController {
  constructor(private readonly publicServService: PublicServService) {}

  @ApiOperation({ summary: 'Create a  public serv' })
  @Post()
  async create(@Body() createPublicServDto: CreatePublicServDto) {
    try {
      return await this.publicServService.create(createPublicServDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  // @ApiOperation({ summary: 'Get all  public servs' })
  // @Get()
  // async findAll(@Query() query: any) {
  //   try {
  //     const page = parseInt(query.page) || 1;
  //     const limit = parseInt(query.limit) || 4;
  //     return this.publicServService.findAll(page, limit);
  //   } catch (error) {
  //     return {
  //       success: false,
  //       statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message || 'Something went wrong',
  //     };
  //   }
  // }

    @ApiOperation({ summary: 'Get all  public servs' })
  @Get()
  async findAll(@Query() query: any) {
    try {
      return this.publicServService.findAll();
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Get single public serv' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.publicServService.findOne(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Update public serv' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePublicServDto: UpdatePublicServDto,
  ) {
    try {
      return await this.publicServService.update(id, updatePublicServDto);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Delete public serv' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.publicServService.remove(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }
}
