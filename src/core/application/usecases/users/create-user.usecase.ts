import { Injectable, Inject } from '@nestjs/common';
import { UsersService } from 'src/core/application/services/users/user.service';
import { UserEntity } from 'src/core/domain/entities/users/users.entity';

@Injectable()
export class CreateProductUseCase {

  constructor(
    @Inject('UsersService')
    private readonly usersService: UsersService,
  ) {}

  async execute(user: UserEntity): Promise<UserEntity | void> {
    const newUser = await this.usersService.createUser(user);
    return newUser;
  }

  
}