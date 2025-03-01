// src/core/application/usecases/delete-product.usecase.ts
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ProductsService } from 'src/core/application/services/product/products.service';

@Injectable()
export class DeleteProductUseCase {

  constructor(
    @Inject('ProductService')
    private readonly productService: ProductsService,
  ) {}

  async execute(id: string): Promise<void> {
    const exists = await this.productService.findProductById(id);
    
    if (!exists) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    await this.productService.deleteProduct(id);
  }
}