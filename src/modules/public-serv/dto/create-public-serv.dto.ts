import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePublicServDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the public servant',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '+1-555-123-4567',
    description: 'Phone number of the public servant (11-15 characters)',
  })
  @IsString()
  @IsNotEmpty()
  @Length(11, 15)
  phone: string;

  @ApiProperty({
    example: 'Florida',
    description: 'State or region where the public servant is located',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Email address of the public servant',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'afdgwsgbsdhy1234asytgsdgv567',
    description: 'ID of the sector the public servant belongs to',
  })
  @IsString()
  @IsNotEmpty()
  sector_id: string;
}
