// src/modules/users/presentation/controllers/User.controller.ts

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUserByIdDto } from '../dtos/getUserById.dto';
import { UserLoginDto } from '../dtos/userLogin.dto';
import { User } from '../../domain/entities/User.entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers(){
    return this.userService.getUsers()
  }
  @Post('id')
  @UsePipes(new ValidationPipe({whitelist: true}))
  getUserById(@Body() getUserByIdDto: GetUserByIdDto){
    return this.userService.getUserById(getUserByIdDto)
  }
  @Post()
  @UsePipes(new ValidationPipe({whitelist: true}))
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }
  @Post('login')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userLogin(@Body() userLoginDto: UserLoginDto): Promise<User | boolean>{
    return await this.userService.userLogin(userLoginDto)
  }
  @Post('register')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userRegister(@Body() userData: CreateUserDto): Promise<User>{
    return await this.userService.createUser(userData)
  }
}
