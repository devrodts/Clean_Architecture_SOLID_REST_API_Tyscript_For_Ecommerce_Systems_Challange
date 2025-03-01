import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../../entities/product/product.entity";
import { ProductRepositoryInterface } from "./interfaces/product.interface";
import { Repository } from "typeorm";

export class ProductRepository implements ProductRepositoryInterface{

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) {}

    async findProductById(id: string): Promise<ProductEntity | null> {
        return this.productRepository.findOneBy({ id });
    }

    async findAllProducts(): Promise<ProductEntity[]> {
        return this.productRepository.find();
    }

    async createProduct(product: ProductEntity): Promise<void> {
        await this.productRepository.save(product);
    }  

    async updateProduct(product: ProductEntity): Promise<void> {
        await this.productRepository.update(product.id, product);
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }

}