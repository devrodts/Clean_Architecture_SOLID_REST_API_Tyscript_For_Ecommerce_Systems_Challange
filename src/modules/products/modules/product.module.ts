
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '../controllers/products/products.controller';
import { TypeOrmProductRepository } from 'src/core/infra/repositories/product/typeorm-product.repository';
import { TypeOrmProductEntity } from 'src/core/infra/database/entities/product/entities/typeorm-product.entity';
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  GetProductUseCase,
  ListProductsUseCase,
  UpdateProductUseCase,
} from 'src/core/application/usecases/product';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypeOrmProductEntity]),
  ],
  controllers: [ProductsController],
  providers: [
    // Registro dos Use Cases
    CreateProductUseCase,
    GetProductUseCase,
    ListProductsUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    {
      provide: 'ProductRepository',
      useClass: TypeOrmProductRepository,
    },
  ],
})
export class ProductsModule {}