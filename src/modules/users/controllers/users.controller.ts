import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from 'src/core/application/services/users/user.service';
import { CreateUserDTO } from '../dtos';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDTO) {
    return this.usersService.createUser(createUserDto);
  }
}
