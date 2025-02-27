// src/modules/products/dto/create-product.request.ts
import { IsString, Length, IsNumber, Min, IsInt, IsDate } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateProductRequest {

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string; 

  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Length(10, 500)
  description: string;

  @IsNumber()
  @Min(0.01)
  price: number;

  @IsInt()
  @Min(0)
  stock: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
