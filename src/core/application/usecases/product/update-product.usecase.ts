import { NotFoundException } from "@nestjs/common";

import { Injectable } from "@nestjs/common";

import { Inject } from "@nestjs/common";
import { ProductRepository } from "src/core/domain/repositories/product.repository";
import { UpdateProductRequest } from "src/modules/products/dtos/update-product.dto";
import { ProductEntity } from "src/core/domain/entities/product/product.entity";


@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(input: UpdateProductRequest): Promise<ProductEntity> {
    const product = await this.productRepository.findById(input.id);
    if (!product) {
      throw new NotFoundException(`Product ${input.id} not found`);
    }

    product.name = input.name;
    product.description = input.description;
    product.price = input.price;
    product.stock = input.stock;

    await this.productRepository.update(product);
    return product;
  }
}