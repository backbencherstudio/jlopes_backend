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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { memoryStorage } from 'multer';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { TestimonialsService } from './testimonials.service';

@ApiTags('Testimonial')
@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @ApiOperation({ summary: 'Create a  testimonial' })
  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: memoryStorage(),
    }),
  )
  async create(
    @Body() createTestimonialDto: CreateTestimonialDto,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    try {
      return await this.testimonialsService.createTestimonials(
        createTestimonialDto,
        images,
      );
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Find all testimonials' })
  @Get()
  async findAll(@Query() query: any) {
    try {
      // const page = parseInt(query.page) || 1;
      // const limit = parseInt(query.limit) || 3;
      return await this.testimonialsService.findAllTestimonials();
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Find single testimonial' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.testimonialsService.findOne(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Update testimonial' })
  @Patch(':id')
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: memoryStorage(),
    }),
  )
  async update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    try {
      return await this.testimonialsService.update(
        id,
        updateTestimonialDto,
        images,
      );
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  @ApiOperation({ summary: 'Delete testimonial' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.testimonialsService.remove(id);
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }
}
