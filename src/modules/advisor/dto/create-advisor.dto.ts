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
  @ApiProperty({
    example: 'clxxx123abc',
    required: false,
    description:
      'Optional unique ID of the state category (used for updating existing entries)',
  })
  @IsString()
  @IsOptional()
  id?: string; // optional id for updating state categories

  @ApiProperty({
    example: 'California',
    description: 'Name of the state',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    example: '90001',
    description: 'ZIP code corresponding to the state',
  })
  @IsString()
  @IsNotEmpty()
  zip: string;
}

export class CreateAdvisorDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the advisor',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Email address of the advisor',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '+1-555-123-4567',
    description: 'Phone number of the advisor',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: [StateCategoryDTO],
    example: [
      { state: 'California', zip: '90001' },
      { state: 'New York', zip: '10001' },
    ],
    description:
      'List of states and their corresponding ZIP codes managed by the advisor',
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => StateCategoryDTO)
  stateCategories: StateCategoryDTO[];
}
