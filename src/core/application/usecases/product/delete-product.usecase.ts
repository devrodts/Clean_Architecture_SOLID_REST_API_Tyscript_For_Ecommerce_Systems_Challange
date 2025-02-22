// src/core/application/usecases/delete-product.usecase.ts
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ProductRepository } from 'src/core/domain/repositories/product.repository';

@Injectable()
export class DeleteProductUseCase {

  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const exists = await this.productRepository.findById(id);
    
    if (!exists) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    await this.productRepository.delete(id);
  }
}