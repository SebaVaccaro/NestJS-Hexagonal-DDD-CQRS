// src/modules/users/infrastructure/services/User.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User.entities';
import { CreateUserDto } from '../../presentation/dtos/createUser.dto';
import { GetUserByIdDto } from '../../presentation/dtos/getUserById.dto';
import { HashingService } from '../../domain/services/hashing.service.interface';

@Injectable()
export class UserService {
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository,@Inject('HashingService') private readonly hashingService: HashingService) {}

  async createUser(createUserDto: CreateUserDto):Promise<string> {
    const password = await this.hashingService.hash(createUserDto.password)
    const user = new User(createUserDto.userId, createUserDto.username, createUserDto.email, password);
    return this.userRepository.addUser(user);
  }
  getUsers(): User[]{
    return this.userRepository.getUsers()
  }
  getUserById(getUserByIdDto: GetUserByIdDto): User{
    return this.userRepository.getUserById(getUserByIdDto.userId)
  }
}
