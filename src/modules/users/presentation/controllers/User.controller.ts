// src/modules/users/presentation/controllers/User.controller.ts

import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUserByIdDto } from '../dtos/getUserById.dto';
import { UserLoginDto } from '../dtos/userLogin.dto';
import { User } from '../../domain/entities/User.entities';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('register')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userRegister(@Body() userData: CreateUserDto): Promise<User>{
    return await this.userService.createUser(userData)
  }
  
  @Post('login')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userLogin(@Body() userLoginDto: UserLoginDto): Promise<User | boolean>{
    return await this.userService.userLogin(userLoginDto)
  }
  
  @Get()
  getUsers(){
    return this.userService.getUsers()
  }
  
  @Get('/:userId')
  @UsePipes(new ValidationPipe({whitelist:true}))
  getUserById(@Param() id:GetUserByIdDto){
    return this.userService.getUserById(id)
  }
  
}
