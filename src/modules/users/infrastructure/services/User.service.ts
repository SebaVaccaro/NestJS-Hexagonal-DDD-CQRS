// src/modules/users/infrastructure/services/User.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User.entities';
import { CreateUserDto } from '../../presentation/dtos/createUser.dto';
import { GetUserByIdDto } from '../../presentation/dtos/getUserById.dto';

@Injectable()
export class UserService {
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

  createUser(createUserDto: CreateUserDto):string {
    
    const user = new User(createUserDto.userId, createUserDto.username, createUserDto.email, createUserDto.password);
    return this.userRepository.addUser(user);
  }
  getUsers(): User[]{
    return this.userRepository.getUsers()
  }
  getUserById(getUserByIdDto: GetUserByIdDto): User{
    return this.userRepository.getUserById(getUserByIdDto.userId)
  }
}
