import { Injectable, NotFoundException, InternalServerErrorException, Inject } from "@nestjs/common";
import { ProductEntity } from "src/core/domain/entities/product/product.entity";
import { ProductRepository } from "src/core/domain/repositories/product/product.repository";
import { UpdateProductRequest } from "src/modules/products/dtos/update-product.request";

@Injectable()
export class ProductsService {

  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async findAllProducts(): Promise<ProductEntity[]>{

    return this.productRepository.findAllProducts();
  }

  async findProductById(id: string): Promise<ProductEntity | null>{

    const product = await this.productRepository.findProductById(id);
    
    if(!product){
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async createProduct(product: ProductEntity): Promise<ProductEntity | void>{
    const newProduct = await this.productRepository.createProduct(product)
    return newProduct;
  }

  async updateProduct(product: UpdateProductRequest): Promise<ProductEntity | void>{
    try {
      const existingProduct = await this.productRepository.findProductById(product.id);

    if(!existingProduct){
      throw new NotFoundException('Product not found');
    }

    if (product.name !== undefined) existingProduct.name = product.name;
    if (product.description !== undefined) existingProduct.description = product.description;
    if (product.price !== undefined) existingProduct.price = product.price;
    if (product.stock !== undefined) existingProduct.stock = product.stock;
    const updatedProduct = await this.productRepository.updateProduct(existingProduct);
    return updatedProduct;
    } catch (error) {
      console.error('Error updating product:', error);
      throw new InternalServerErrorException('Error updating product');
    }
  }

  async deleteProduct(id: string): Promise<void>{
    await this.productRepository.deleteProduct(id);
  }
}
