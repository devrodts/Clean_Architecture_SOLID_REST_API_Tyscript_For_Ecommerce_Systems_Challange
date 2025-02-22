import { v4 as uuidv4 } from 'uuid';

interface ProductProps {
  name: string;
  description: string;
  price: number;
  stock: number;
}

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
  
    public validate(): void {
      if (this.price <= 0) {
        throw new Error('Price must be greater than zero');
      }
      if (this.stock < 0) {
        throw new Error('Stock cannot be negative');
      }
      if (this.name.length < 3) {
        throw new Error('Name must be at least 3 characters');
      }
      if (this.description.length < 10) {
        throw new Error('Description must be at least 10 characters');
      }
    }
  
    public update(props: Partial<Omit<ProductEntity, 'id' | 'createdAt'>>): void {
      Object.assign(this, props);
      this.updatedAt = new Date();
      this.validate();
    }

    public static create(props: ProductProps): ProductEntity {
        return new ProductEntity(
            uuidv4(),
            props.name,
            props.description,
            props.price,    
            props.stock
        );
    }

  }