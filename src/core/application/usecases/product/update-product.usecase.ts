import { ProductRepository } from "src/core/domain/repositories/product.repository";

import { NotFoundException, Injectable, Inject } from '@nestjs/common';
import { UpdateProductRequest } from "src/modules/products/dtos/update-product.request";
import { ProductEntity } from "src/core/domain/entities/product/product.entity";
@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(input: UpdateProductRequest): Promise<ProductEntity> {
    const product = await this.productRepository.findById(input.id);
    
    if (!product) {
      throw new NotFoundException(`Product ${input.id} not found`);
    }

    // Atualiza apenas os campos fornecidos
    const updateData = {
      name: input.name ?? product.name,
      description: input.description ?? product.description,
      price: input.price ?? product.price,
      stock: input.stock ?? product.stock,
    };

    // Atualiza a entidade
    Object.assign(product, updateData);
    
    // Valida a entidade atualizada
    product.validate();

    await this.productRepository.update(product);
    return product;
  }
}