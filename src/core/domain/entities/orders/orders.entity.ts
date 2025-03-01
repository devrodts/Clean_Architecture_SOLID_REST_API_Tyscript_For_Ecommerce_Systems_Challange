import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('orders')
export class OrdersEntity{

    constructor(
        id: string,
        user_id: string,
        total_price: number,
        status: string,
        created_at: Date,
        updated_at: Date,
    ) {
        this.id = id;
        this.user_id = user_id;
        this.total_price = total_price;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        }

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    user_id: string;

    @Column()
    total_price: number;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
}