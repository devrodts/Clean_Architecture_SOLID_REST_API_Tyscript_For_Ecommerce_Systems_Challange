
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpCode,
    ParseUUIDPipe,
    NotFoundException,
  } from '@nestjs/common';

  import { CreateProductUseCase } from 'src/core/application/usecases/products';
import { CreateProductRequest } from '../dtos/products/create-product.dto';
import { ProductResponse } from '../dtos/products/product-response.dto';
import { UpdateProductRequest } from '../dtos/products/update-product.request';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';
import { GetProductUseCase, ListProductsUseCase, UpdateProductUseCase, DeleteProductUseCase } from 'src/core/application/usecases/products';

  @Controller('products')
  export class ProductsController {
    constructor(
      private readonly createUseCase: CreateProductUseCase,
      private readonly getUseCase: GetProductUseCase,
      private readonly listUseCase: ListProductsUseCase,
      private readonly updateUseCase: UpdateProductUseCase,
      private readonly deleteUseCase: DeleteProductUseCase,
    ) {}
  
    @Post()
    @HttpCode(201)
    async create(@Body() body: CreateProductRequest): Promise<ProductResponse> {
      const product = await this.createUseCase.execute(body);
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      return this.toResponse(product);
    }
  
    @Get()
    async findAll(): Promise<ProductResponse[]> {
      const products = await this.listUseCase.execute();
      return products.map(this.toResponse);
    }
  
    @Get(':id')
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ProductResponse> {
      const product = await this.getUseCase.execute(id);
      return this.toResponse(product);
    }
  
    @Put()
    async update(@Body() body: UpdateProductRequest): Promise<ProductResponse> {
      const product = await this.updateUseCase.execute(body);
      return this.toResponse(product);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<void> {
      await this.deleteUseCase.execute(id);
    }
  
    private toResponse(product: ProductEntity): ProductResponse {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category: product.category,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      };
    }
  }