import { Injectable, Inject } from '@nestjs/common';
import { ProductsService } from 'src/core/application/services/product/products.service';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';

@Injectable()
export class ListProductsUseCase {
  constructor(
    @Inject('ProductsService')
    private readonly productService: ProductsService,
  ) {}

  async execute(): Promise<ProductEntity[]> {
      return this.productService.findAllProducts();
  }
}