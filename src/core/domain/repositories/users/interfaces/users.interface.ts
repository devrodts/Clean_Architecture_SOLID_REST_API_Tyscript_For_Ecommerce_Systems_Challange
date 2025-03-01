import { UserEntity } from "src/core/domain/entities/users/users.entity";

export interface UsersInterface{
    findUserById(id: string): Promise<UserEntity | null>;
    findAllUsers(): Promise<UserEntity[]>;
    createUser(user: UserEntity): Promise<UserEntity>;
    updateUser(user: UserEntity): Promise<UserEntity>;
    deleteUser(id: string): Promise<void>;
}