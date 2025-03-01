import { CategoriesEntity } from "src/core/domain/entities/categories/categories.entity";

export class ProductResponse {

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        stock: number,
        createdAt: string,
        updatedAt: string,
        category: CategoriesEntity,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt; 
        this.category = category;
    }
    
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
    category: CategoriesEntity;
}