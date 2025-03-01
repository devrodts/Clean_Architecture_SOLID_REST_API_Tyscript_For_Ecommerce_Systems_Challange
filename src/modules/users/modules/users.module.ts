import { UsersService } from "src/core/application/services/users/user.service";
import { UsersController } from "../controllers/users.controller";
import { UserEntity } from "src/core/domain/entities/users/users.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers: [UsersService],
})  
export class UsersModule {
    
}