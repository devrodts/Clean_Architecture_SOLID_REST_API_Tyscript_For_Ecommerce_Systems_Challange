import { NotFoundException, Injectable, Inject } from '@nestjs/common';
import { UpdateProductRequest } from "src/modules/products/dtos/update-product.request";
import { ProductEntity } from "src/core/domain/entities/product/product.entity";
import { ProductsService } from "../../services/product/products.service";

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductService')
    private readonly productService: ProductsService,
  ) {}

  async execute(input: UpdateProductRequest): Promise<ProductEntity> {

    const product = await this.productService.findById(input.id);
    
    if (!product) {
      throw new NotFoundException(`Product ${input.id} not found`);
    }

    const updateData = {
      name: input.name ?? product.name,
      description: input.description ?? product.description,
      price: input.price ?? product.price,
      stock: input.stock ?? product.stock,
    };

    Object.assign(product, updateData);

    await this.productService.updateProduct(product);
    return product;
  }
}