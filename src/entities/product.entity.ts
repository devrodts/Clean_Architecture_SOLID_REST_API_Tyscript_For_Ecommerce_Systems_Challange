import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { Entity } from "typeorm";

import { PrimaryGeneratedColumn } from "typeorm";

import { IsDate, IsString, Length } from "class-validator";

@Entity('products')
export class ProductEntity {

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsString()
    @Length(3, 100)
    name: string;

    @Column()
    @IsString()
    @Length(10, 500)
    description: string;

    @Column({ type: 'decimal' })
    price: number;

    @Column({
      type: 'int',
      nullable: false,
      default: 0
    })
    
    stock: number;

    @CreateDateColumn()
    @IsDate()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 