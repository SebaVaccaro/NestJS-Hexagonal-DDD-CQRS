// src/modules/users/presentation/controllers/User.controller.ts

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../infrastructure/services/User.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUserByIdDto } from '../dtos/getUserById.dto';

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
  createUser(@Body() createUserDto: CreateUserDto): string {
    return this.userService.createUser(createUserDto);
  }
}
