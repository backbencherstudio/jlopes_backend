import { Injectable } from '@nestjs/common';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { UpdateContactUsDto } from './dto/update-contact-us.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactUsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createContactUsDto: CreateContactUsDto) {
    try {

      const check = await this.prisma.contactUs.findFirst({
        where: {
          email: createContactUsDto.email,
          phone: createContactUsDto.phone
        }
      });

      if (check) {
        return {
          success: false,
          message: 'Contact Us inquiry with this email already exists',
        };
      }

      const createdContactUs = { ...createContactUsDto };

      const res = await this.prisma.contactUs.create({
        data: createdContactUs,
      });

      return {
        success: true,
        message: 'Contact Us inquiry created successfully',
        data: res,
      };

    } catch (error) {
      throw error;
    }
  }
  async findAll() {
    const res = await this.prisma.contactUs.findMany({});
    return {
      success: true,
      message: 'This action returns all contactUs',
      data: res
    };
  }
  findOne(id: number) {
    return `This action returns a #${id} contactUs`;
  }
  update(id: number, updateContactUsDto: UpdateContactUsDto) {
    return `This action updates a #${id} contactUs`;
  }
  async remove(id: string) {

    const check = await this.prisma.contactUs.findUnique({
      where: { id: id }
    });

    if (!check) {
      return {
        success: false,
        message: 'Contact Us inquiry not found',
      }
    }

    const deteletion = await this.prisma.contactUs.delete({
      where: { id: id }
    });



    return {
      success: true,
      message: 'Contact Us inquiry deleted successfully',
      data: deteletion,
    };
  }
}
