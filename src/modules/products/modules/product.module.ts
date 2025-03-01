import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '../controllers/products.controller';
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  GetProductUseCase,
  ListProductsUseCase,
  UpdateProductUseCase,
} from 'src/core/application/usecases/products';
import { ProductsService } from 'src/core/application/services/products/products.service';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';
import { ProductRepository } from 'src/core/domain/repositories/product/product.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductsService',
      useClass: ProductsService,
    },
    CreateProductUseCase,
    GetProductUseCase,
    ListProductsUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    {
      provide: 'ProductRepository',
      useClass: ProductRepository,
    },
  ],
})
export class ProductsModule {}