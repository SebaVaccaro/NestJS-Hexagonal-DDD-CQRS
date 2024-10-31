// src/modules/users/infrastructure/services/User.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User.entities';

@Injectable()
export class UserService {
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

  createUser(data: { userId: string; username: string; email: string; password: string }):string {
    const user = new User(data.userId, data.username, data.email, data.password);
    return this.userRepository.addUser(user);
  }
  getUsers(): User[]{
    return this.userRepository.getUsers()
  }
  getUserById(id:string): User{
    return this.userRepository.getUserById(id)
  }
}
