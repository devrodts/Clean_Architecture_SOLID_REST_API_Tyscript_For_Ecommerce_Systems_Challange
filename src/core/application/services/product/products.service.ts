import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "src/core/domain/entities/product/product.entity";
import { ProductRepository } from "src/core/domain/repositories/product.repository";
import { TypeOrmProductRepository } from "src/core/infra/repositories/product/typeorm-product.repository";

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
}
