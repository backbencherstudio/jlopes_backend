import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class StateCategoryDTO {
  @ApiProperty({ example: 'clxxx123abc', required: false })
  @IsString()
  @IsOptional()
  id?: string; // optional id for updating state categories

  @ApiProperty({ example: 'California' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: '90001' })
  @IsString()
  @IsNotEmpty()
  zip: string;
}

export class CreateAdvisorDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+1-555-123-4567' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: [StateCategoryDTO],
    example: [
      { state: 'CaliforniaA', zip: '90001' },
      { state: 'New York', zip: '10001' },
    ],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => StateCategoryDTO)
  stateCategories: StateCategoryDTO[];
}
