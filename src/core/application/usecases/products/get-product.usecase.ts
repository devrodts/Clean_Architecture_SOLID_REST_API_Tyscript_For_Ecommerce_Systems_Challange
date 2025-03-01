import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ProductsService } from 'src/core/application/services/products/products.service';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';

@Injectable()
export class GetProductUseCase {
  constructor(
    @Inject('ProductsService')
    private readonly productService: ProductsService,
  ) {}

  async execute(id: string): Promise<ProductEntity> {
    const product = await this.productService.findProductById(id);
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    return product;
  }
}