import { ProductEntity } from "../../../entities/product/product.entity";

export interface ProductRepositoryInterface {
    findProductById(id: string): Promise<ProductEntity | null>;
    findAllProducts(): Promise<ProductEntity[]>;
    createProduct(product: ProductEntity): Promise<void>;
    updateProduct(product: ProductEntity): Promise<void>;
    deleteProduct(id: string): Promise<void>;
  }