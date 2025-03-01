import { Injectable, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "src/core/domain/entities/product/product.entity";
import { TypeOrmProductRepository } from "src/core/infra/repositories/product/typeorm-product.repository";
import { UpdateProductRequest } from "src/modules/products/dtos/update-product.request";

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(TypeOrmProductRepository)
    private readonly productRepository: TypeOrmProductRepository,
  ) {}

  async findById(id: string): Promise<ProductEntity | null>{

    const product = await this.productRepository.findById(id);
    
    if(!product){
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async create(product: ProductEntity): Promise<ProductEntity | void>{
    const newProduct = await this.productRepository.create(product)
    return newProduct;
  }

  async updateProduct(product: UpdateProductRequest): Promise<ProductEntity | void>{
    try {
      const existingProduct = await this.findById(product.id);

    if(!existingProduct){
      throw new NotFoundException('Product not found');
    }

    if (product.name !== undefined) existingProduct.name = product.name;
    if (product.description !== undefined) existingProduct.description = product.description;
    if (product.price !== undefined) existingProduct.price = product.price;
    if (product.stock !== undefined) existingProduct.stock = product.stock;
    const updatedProduct = await this.productRepository.update(existingProduct);
    return updatedProduct;
    } catch (error) {
      console.error('Error updating product:', error);
      throw new InternalServerErrorException('Error updating product');
    }
  }
}
