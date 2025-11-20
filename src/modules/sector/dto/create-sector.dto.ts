import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSectorDto {
  @ApiProperty({
    example: 'Teacher',
    description:
      'Name of the sector or category to which the public servant belongs',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
