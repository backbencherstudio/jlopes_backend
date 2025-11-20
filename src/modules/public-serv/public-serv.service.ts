import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicServDto, } from './dto/create-public-serv.dto';
import { UpdatePublicServDto } from './dto/update-public-serv.dto';

@Injectable()
export class PublicServService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPublicServDto: CreatePublicServDto) {
    try {
      const result = await this.prisma.publicServPrivateWealth.create({
        data: createPublicServDto,
      });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Advsior is deleted successfully',
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message || 'Something went wrong',
      };
    }
  }

  findAll() {
    return `This action returns all publicServ`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicServ`;
  }

  update(id: number, updatePublicServDto: UpdatePublicServDto) {
    return `This action updates a #${id} publicServ`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicServ`;
  }
}
