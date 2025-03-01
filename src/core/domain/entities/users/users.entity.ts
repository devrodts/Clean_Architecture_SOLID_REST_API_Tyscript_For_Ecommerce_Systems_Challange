import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { OrdersEntity } from "../orders/orders.entity";
import { IsEmail } from "class-validator";

@Entity('users')
export class UserEntity {

  constructor(
    id: string,
    name: string,
    email: string,
    orders: OrdersEntity[], 
    created_at: Date,
    updated_at: Date,
    password: string,
    confirm_password: string,
    city: string,
    state: string,
    country: string,
    zip_code: string,
    phone: string,
    address: string,
    
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.orders = orders;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.password = password;
    this.confirm_password = confirm_password;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip_code = zip_code;
    this.phone = phone;
    this.address = address;
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(() => OrdersEntity, (order) => order.user_id)
  orders: OrdersEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  password: string;
 
  @Column()
  confirm_password: string;


  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  zip_code?: string; 

  @Column()
  phone: string;

  @Column({ nullable: true })
  address?: string;
  
}