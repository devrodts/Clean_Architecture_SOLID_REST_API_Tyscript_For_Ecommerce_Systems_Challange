// src/core/application/usecases/create-product.usecase.ts
import { Injectable, Inject } from '@nestjs/common';
import { ProductEntity } from '../../../domain/entities/product/product.entity';
import { ProductRepository } from '../../../domain/repositories/product.repository';
import { CreateProductRequest } from 'src/modules/products/dtos/create-product.dto';
import { TypeOrmProductRepository } from 'src/core/infra/repositories/product/typeorm-product.repository';
import { ProductsService } from '../../services/product/products.service';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: TypeOrmProductRepository,
    private readonly productService: ProductsService,
  ) {}

  async execute(product: CreateProductRequest): Promise<ProductEntity | void> {
    const newProduct = await this.productService.create(product);
    return newProduct;
  }
}