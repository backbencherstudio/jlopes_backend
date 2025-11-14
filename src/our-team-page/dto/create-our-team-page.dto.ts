import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOurTeamPageDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
