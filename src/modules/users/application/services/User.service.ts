import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User.entities';
import { CreateUserDto } from '../../presentation/dtos/createUser.dto';
import { GetUserByIdDto } from '../../presentation/dtos/getUserById.dto';
import { HashingService } from '../../domain/services/hashing.service.interface';
import { GetUserByEmailDto } from '../../presentation/dtos/getUserByEmail.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('HashingService') private readonly hashingService: HashingService
  ) {}
  
  async createUser(createUserDto: CreateUserDto):Promise<User | null> {
    const password = await this.hashingService.hash(createUserDto.password)
    const user = new User(
      createUserDto.username,
      createUserDto.email,
      password,
      createUserDto.phonenumber,
      createUserDto.age,
      createUserDto.gender
    );
    return this.userRepository.addUser(user);
  }
  getUsers(): User[]{
    return this.userRepository.getUsers()
  }
  async getUserById(id: GetUserByIdDto): Promise<User | null>{
    return await this.userRepository.getUserById(id.userId)
  }
  async getUserByEmail(GetUserByEmailDto: GetUserByEmailDto): Promise<User | null>{
    return await this.userRepository.getUserByEmail(GetUserByEmailDto.email)
  }
  async getPublicData(id: GetUserByIdDto): Promise<{} | null>{
    const user = await this.userRepository.getUserById(id.userId)
    const publicData = user.getPublicData()
    return publicData
  }
  async getPrivateData(id: GetUserByIdDto): Promise<{} | null>{
    const user = await this.userRepository.getUserById(id.userId)
    const privateData = user.getPrivateData()
    return privateData
  }
}
