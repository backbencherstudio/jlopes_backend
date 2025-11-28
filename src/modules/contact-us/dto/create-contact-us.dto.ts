import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber
} from "class-validator";

export class CreateContactUsDto {

  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name: string;

  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email is required" })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Message is required" })
  message: string;

  @IsPhoneNumber(null, { message: "Invalid phone number" })
  @IsNotEmpty({ message: "Phone number is required" })
  phone: string;

  @IsString()
  @IsNotEmpty({ message: "Sector ID is required" })
  sector_id: string;
}
