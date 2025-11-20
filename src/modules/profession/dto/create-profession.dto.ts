import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfessionDto {
  @ApiProperty({example: 'Teacher', description: "Write your profession"})
  @IsString()
  @IsNotEmpty()
  name: string;
}
