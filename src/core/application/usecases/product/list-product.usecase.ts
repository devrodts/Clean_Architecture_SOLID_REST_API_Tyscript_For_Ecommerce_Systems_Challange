// src/core/application/usecases/list-products.usecase.ts
import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from 'src/core/domain/repositories/product.repository';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';

@Injectable()
export class ListProductsUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(): Promise<ProductEntity[]> {
    return this.productRepository.findAll();
  }
}