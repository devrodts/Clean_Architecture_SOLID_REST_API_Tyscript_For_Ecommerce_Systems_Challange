// src/core/infrastructure/repositories/typeorm-product.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/core/domain/entities/product/product.entity';
import { ProductRepository } from 'src/core/domain/repositories/product.repository';
import { TypeOrmProductEntity } from 'src/core/infra/database/entities/product/entities';


@Injectable()
export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(TypeOrmProductEntity)
    private readonly ormRepo: Repository<TypeOrmProductEntity>,
  ) {}

  async findById(id: string): Promise<ProductEntity | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? this.toDomain(entity) : null;
  }

  async findAll(): Promise<ProductEntity[]> {
    const entities = await this.ormRepo.find();
    return entities.map(entity => this.toDomain(entity));
  }

  async save(product: ProductEntity): Promise<void> {
    const entity = this.toOrmEntity(product);
    await this.ormRepo.save(entity);
  }

  async update(product: ProductEntity): Promise<void> {
    const entity = this.toOrmEntity(product);
    await this.ormRepo.update(entity.id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }

  private toDomain(entity: TypeOrmProductEntity): ProductEntity {
    return new ProductEntity(
      entity.id,
      entity.name,
      entity.description,
      entity.price,
      entity.stock,
      entity.createdAt,
      entity.updatedAt,
    );
  }

  private toOrmEntity(domain: ProductEntity): TypeOrmProductEntity {
    const entity = new TypeOrmProductEntity();
    entity.id = domain.id;
    entity.name = domain.name;
    entity.description = domain.description;
    entity.price = domain.price;
    entity.stock = domain.stock;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }
}