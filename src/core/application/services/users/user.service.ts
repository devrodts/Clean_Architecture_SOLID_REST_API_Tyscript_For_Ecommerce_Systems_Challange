import { Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "src/core/domain/repositories/users/users.repository";
import { UserEntity } from "src/core/domain/entities/users/users.entity";

@Injectable()

export class UsersService {

    constructor(
        @Inject('UsersRepository')
        private readonly usersRepository: UsersRepository,
    ) {}

    async findAllUsers(): Promise<UserEntity[]> {
        return this.usersRepository.findAllUsers();
    }

    async findUserById(id: string): Promise<UserEntity | null> {
        return this.usersRepository.findUserById(id);
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
        return this.usersRepository.createUser(user);
    }   

    async updateUser(user: UserEntity): Promise<UserEntity> {
        return this.usersRepository.updateUser(user);
    }

    async deleteUser(id: string): Promise<void> {
        return this.usersRepository.deleteUser(id);
    }
}
