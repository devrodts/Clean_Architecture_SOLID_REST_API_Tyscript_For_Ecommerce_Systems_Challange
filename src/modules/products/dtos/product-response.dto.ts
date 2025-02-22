export class ProductResponse {

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        stock: number,
        createdAt: string,
        updatedAt: string,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
}