import { UsersInterface } from "./interfaces/users.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/core/domain/entities/users/users.entity";

export class UsersRepository implements UsersInterface{

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async findUserById(id: string): Promise<UserEntity | null> {
        return this.userRepository.findOneBy({ id });
    }

    async findAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }   

    async createUser(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    async updateUser(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
    
    
}   