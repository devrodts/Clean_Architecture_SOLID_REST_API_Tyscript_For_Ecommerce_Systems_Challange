import { ProductEntity } from "../entities/product/product.entity";

export interface ProductRepository {
    findById(id: string): Promise<ProductEntity | null>;
    findAll(): Promise<ProductEntity[]>;
    create(product: ProductEntity): Promise<void>;
    update(product: ProductEntity): Promise<void>;
    delete(id: string): Promise<void>;
  }