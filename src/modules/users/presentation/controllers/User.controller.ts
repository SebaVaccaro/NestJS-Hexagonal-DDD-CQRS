// src/modules/users/presentation/controllers/User.controller.ts

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUserByIdDto } from '../dtos/getUserById.dto';
import { UserLoginDto } from '../dtos/userLogin.dto';

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
  async createUser(@Body() createUserDto: CreateUserDto): Promise<string> {
    return await this.userService.createUser(createUserDto);
  }
  @Post('login')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userLogin(@Body() userLoginDto: UserLoginDto): Promise<boolean>{
    return await this.userService.userLogin(userLoginDto)
  }
}
