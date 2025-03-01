import { IsString, Length, IsDate, IsArray, ValidateNested } from 'class-validator';
import { PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';

import { OrdersEntity } from 'src/core/domain/entities/orders/orders.entity';
import { Type } from 'class-transformer';

export class CreateUserDTO {

  constructor(
    id: string,
    email: string,
    phone: string,
    password: string,
    name: string,
    confirm_password: string = '',
    city?: string,
    state?: string,
    country?: string,
    zip_code?: string,
    address?: string,
    orders?: OrdersEntity[],
    created_at: Date = new Date(),
    updated_at: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirm_password = confirm_password;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip_code = zip_code;
    this.phone = phone;
    this.address = address;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.orders = orders || [];
  }

  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string; 

  @IsString()
  @Length(3, 100)
  name: string;

  @IsDate()
  @CreateDateColumn()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsString()
  email: string;

  @IsString()
  password: string; 

  @IsString()
  confirm_password: string;

  @IsString()
  @Column({ nullable: true })
  city?: string;

  @IsString()
  country?: string;

  @IsString()
  zip_code?: string; 

  @IsString()
  phone: string;

  @IsString()
  address?: string;  
  
  @Column({ nullable: true })
  state?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrdersEntity)
  orders: OrdersEntity[];
}
