import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { HashingService } from '../../domain/services/hashing.service.interface';
import { IIdService } from '../../domain/interface/Id.interface';
import { NewUserInterface } from '../../domain/interface/NewUserInterface';
import { IdInterface } from '../../domain/interface/IdInterface';
import { EmailInterface } from '../../domain/interface/EmailInterface';
import { User } from '../../domain/entities/User.entities';
import { UserResDto } from '../../presentation/dtos/UserRes.dto';
import { PublicDataDto } from '../../presentation/dtos/PublicData.dto';
import { PrivateDataDto } from '../../presentation/dtos/PrivateDataDto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('HashingService') private readonly hashingService: HashingService,
    @Inject('IdService') private readonly idService: IIdService
  ) {}
  
  async createUser(data: NewUserInterface):Promise<UserResDto | null> {
    const password = await this.hashingService.hash(data.password)
    const newUser = {
      _id: this.idService.generate(),
      username: data.username,
      email: data.email,
      password,
      phonenumber: data.phonenumber,
      age: data.age,
      gender: data.gender,
      myPublications: [],
      myPublicationRequests: [],
      myPublicationMatches: [],
      myRequests: [],
      myMatches: []
    };
    const user = await this.userRepository.addUser(newUser);
    if(!user)return null
    return new UserResDto(user)
  }
  
  async getUsers(): Promise<UserResDto[]>{
    
    const users: User[] = await this.userRepository.getUsers()
    
    const usersResDto: UserResDto[] = []
    users.map(user=>{
      const userResDto: UserResDto = new UserResDto(user)
      usersResDto.push(userResDto)
    })
    
    return usersResDto
  }
  
  async getUserById({id}: IdInterface): Promise<UserResDto | null>{
    const user = await this.userRepository.getUserById(id)
    if(!user) return null
    return new UserResDto(user)
  }
  
  async getUserByEmail({email}: EmailInterface): Promise<User | null>{
    return await this.userRepository.getUserByEmail(email)
  }
  
  async getPublicData({id}: IdInterface): Promise<{} | null>{
    const user = await this.userRepository.getUserById(id)
    const {username, age, gender} = user.getPublicData()
    const publicDataDto = new PublicDataDto(username, age, gender)
    return publicDataDto
  }
  async getPrivateData({id}: IdInterface): Promise<{} | null>{
    const user = await this.userRepository.getUserById(id)
    const {email, phonenumber} = user.getPrivateData()
    const privateDataDto = new PrivateDataDto(email, phonenumber)
    return privateDataDto
  }
}
