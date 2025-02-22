import { v4 as uuidv4 } from 'uuid';

export class ProductEntity {
    constructor(
      public readonly id: string,
      public name: string,
      public description: string,
      public price: number,
      public stock: number,
      public readonly createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ) {
      this.validate();
    }
  
    private validate(): void {
      if (this.price <= 0) {
        throw new Error('Price must be greater than zero');
      }
      if (this.stock < 0) {
        throw new Error('Stock cannot be negative');
      }
      if (this.name.length < 3) {
        throw new Error('Name must be at least 3 characters');
      }
    }
  
    static create(props: Omit<ProductEntity, 'id'|'createdAt'|'updatedAt'>): ProductEntity {
      return new ProductEntity(
        uuidv4(),
        props.name,
        props.description,
        props.price,
        props.stock
      );
    }
  }