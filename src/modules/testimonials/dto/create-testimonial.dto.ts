import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CreateTestimonialDto {
  @ApiProperty({
    description:
      'Explains how GapGuardian helped the client solve their financial or retirement issue.',
    example:
      'We helped her restructure her retirement plan using GapGuardian’s analysis, filling a 43% income gap and securing survivor protection for her family.',
  })
  @IsString()
  @IsOptional()
  howWeHelped: string;

  @ApiProperty({
    description:
      'A list of major gaps identified during analysis, converted into a comma-separated string.',
    example:
      '43% income gap, No survivor protection, Misaligned investment structure',
  })
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : value))
  gapGuardian: string;

  @ApiProperty({
    description: 'The final outcome or improvement achieved for the client.',
    example:
      'Now receives 94% of her final salary for life with full survivor protection.',
  })
  @IsString()
  @IsOptional()
  result: string;

  @ApiProperty({
    description: 'The short display name of the client giving the testimonial.',
    example: 'Sarah L.',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'A short biography or background summary of the client.',
    example: '28-year educator with a passion for helping students succeed.',
  })
  @IsString()
  @IsOptional()
  bio: string;

  @ApiProperty({
    description:
      'The title shown at the footer of the testimonial card or section.',
    example: 'The Educator’s $380K Pension Shortfall — Solved',
  })
  @IsString()
  @IsOptional()
  footer_title: string;
}
