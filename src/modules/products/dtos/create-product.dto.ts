// src/modules/products/dto/create-product.request.ts
import { IsString, Length, IsNumber, Min, IsInt } from 'class-validator';

export class CreateProductRequest {

  constructor(
    name: string,
    description: string,
    price: number,
    stock: number,
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
  }

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
}
