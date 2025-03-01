// src/modules/products/dtos/update-product.request.ts
import { IsString, IsOptional, IsNumber, Min, IsInt, Length, IsDate } from 'class-validator';

export class UpdateProductRequest {
  @IsString()
  id!: string;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(10, 500)
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.01)
  price?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}