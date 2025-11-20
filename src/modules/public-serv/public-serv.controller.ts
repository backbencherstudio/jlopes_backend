import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
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

  @Get()
  findAll() {
    return this.publicServService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicServService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublicServDto: UpdatePublicServDto,
  ) {
    return this.publicServService.update(+id, updatePublicServDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicServService.remove(+id);
  }
}
