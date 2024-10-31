// src/modules/users/presentation/controllers/User.controller.ts

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../infrastructure/services/User.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers(){
    return this.userService.getUsers()
  }
  @Post('id')
  getUserById(@Body() body:{userId: string}){
    return this.userService.getUserById(body.userId)
  }
  @Post()
  createUser(@Body() body: {
    userId: string;
    username: string;
    email: string;
    password: string;
  }): string {
    return this.userService.createUser(body);
  }
}
