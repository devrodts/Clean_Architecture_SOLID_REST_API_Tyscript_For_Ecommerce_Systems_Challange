import { Injectable, Inject } from '@nestjs/common';
import { ProductEntity } from '../../../domain/entities/product/product.entity';
import { CreateProductRequest } from 'src/modules/products/dtos/create-product.dto';
import { ProductsService } from '../../services/product/products.service';

@Injectable()
export class CreateProductUseCase {

  constructor(
    @Inject('ProductRepository')
    private readonly productService: ProductsService,
  ) {}

  async execute(product: CreateProductRequest): Promise<ProductEntity | void> {
    const newProduct = await this.productService.create(product);
    return newProduct;
  }
}