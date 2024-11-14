import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserIdDto } from '../../presentation/dtos/UserId.dto';
import { UserEmailDto } from '../../presentation/dtos/UserEmail.dto';
import { UserDto } from '../../presentation/dtos/User.dto';
import { HashingService } from '../../domain/services/hashing.service.interface';
import { UserS } from '../../infrastructure/db/UserSchema';
import { IIdService } from '../../domain/interface/Id.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('HashingService') private readonly hashingService: HashingService,
    @Inject('IdService') private readonly idService: IIdService
  ) {}
  
  async createUser(userDto: UserDto):Promise<UserS | null> {
    const password = await this.hashingService.hash(userDto.password)
    const user = {
      _id: this.idService.generate(),
      username: userDto.username,
      email: userDto.email,
      password,
      phonenumber: userDto.phonenumber,
      age: userDto.age,
      gender: userDto.gender
    };
    return await this.userRepository.addUser(user);
  }
  getUsers(): Promise<UserS[]>{
    return this.userRepository.getUsers()
  }
  async getUserById(id: UserIdDto): Promise<UserS | null>{
    return await this.userRepository.getUserById(id.userId)
  }
  async getUserByEmail(emailDto: UserEmailDto | UserEmailDto): Promise<UserS | null>{
    return await this.userRepository.getUserByEmail(emailDto.email)
  }
  async getPublicData(id: UserIdDto): Promise<{} | null>{
    const user = await this.userRepository.getUserById(id.userId)
    const publicData = user.getPublicData()
    return publicData
  }
  async getPrivateData(id: UserIdDto): Promise<{} | null>{
    const user = await this.userRepository.getUserById(id.userId)
    const privateData = user.getPrivateData()
    return privateData
  }
}
