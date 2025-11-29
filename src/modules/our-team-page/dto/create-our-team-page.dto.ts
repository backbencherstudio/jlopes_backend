import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsObject } from 'class-validator';

export class CreateOurTeamPageDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Senior Developer' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Experienced full-stack developer with 5+ years in web development' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
    required: false,
  })
  @IsOptional()
  socialLinks?: Record<string, string>;
}
