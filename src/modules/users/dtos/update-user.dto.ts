
import { IsString, IsOptional, Length, IsDate } from 'class-validator';

export class UpdateUserRequest {

  @IsString()
  id!: string;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(10, 500)
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  zip_code?: string;    

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;

}