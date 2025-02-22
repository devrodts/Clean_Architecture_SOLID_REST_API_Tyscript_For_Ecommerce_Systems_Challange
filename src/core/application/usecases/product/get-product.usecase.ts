// src/core/application/usecases/get-product.usecase.ts
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ProductRepository } from 'src/core/domain/repositories/product.repository';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';

@Injectable()
export class GetProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: string): Promise<ProductEntity> {
    const product = await this.productRepository.findById(id);
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    return product;
  }
}