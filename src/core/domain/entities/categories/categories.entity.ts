import { PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

import { ProductEntity } from "../product/product.entity";

@Entity('categories')
export class CategoriesEntity {

    constructor(
        id: string,
        name: string,
        products: ProductEntity[],
        created_at: Date,
        updated_at: Date,
    ) {
        this.id = id;
        this.name = name;
        this.products = products;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(() => ProductEntity, (product) => product.category)
    products: ProductEntity[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
