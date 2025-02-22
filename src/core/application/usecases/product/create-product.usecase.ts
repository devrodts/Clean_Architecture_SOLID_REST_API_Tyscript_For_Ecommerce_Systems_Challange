// src/core/application/usecases/create-product.usecase.ts
import { Injectable, Inject } from '@nestjs/common';
import { ProductEntity } from '../../../domain/entities/product/product.entity';
import { ProductRepository } from '../../../domain/repositories/product.repository';
import { CreateProductRequest } from 'src/modules/products/dtos/create-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(input: CreateProductRequest): Promise<ProductEntity> {
    // 1. Cria a entidade de domínio usando o factory method
    const product = ProductEntity.create({
      name: input.name,
      description: input.description,
      price: input.price,
      stock: input.stock,
    });
    await this.productRepository.save(product);
    return product;
  }
}