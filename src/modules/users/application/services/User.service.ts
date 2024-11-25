import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { HashingService } from '../../domain/services/hashing.service.interface';
import { User } from '../../domain/entities/User.entities';
import { UserResDto } from '../../presentation/dtos/UserRes.dto';
import { PublicDataDto } from '../../presentation/dtos/PublicData.dto';
import { PrivateDataDto } from '../../presentation/dtos/PrivateDataDto';
import { IdDto } from 'src/modules/publications/presentation/dtos/IdDto';
import { EmailDto } from '../../presentation/dtos/Email.dto';
import { NewUserInterface } from '../../domain/interface/NewUserInterface';
import { IdServiceI } from '../../domain/interface/IdServiceI';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('HashingService') private readonly hashingService: HashingService,
    @Inject('IdService') private readonly idService: IdServiceI
  ) {}
  
  async createUser(data: NewUserInterface):Promise<UserResDto | null> {
    const password = await this.hashingService.hash(data.password)
    const newUser = {
      ...data,
      _id: this.idService.generate(),
      password,
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
  
  async getUserById({id}: IdDto): Promise<UserResDto | null>{
    const user = await this.userRepository.getUserById(id)
    if(!user) return null
    return new UserResDto(user)
  }
  
  async getUserByEmail({email}: EmailDto): Promise<UserResDto | null>{
    const user = await this.userRepository.getUserByEmail(email)
    return new UserResDto(user)
  }
  
  async getPublicData({id}: IdDto): Promise<PublicDataDto | null>{
    const user = await this.userRepository.getUserById(id)
    const {username, age, gender} = user.getPublicData()
    return new PublicDataDto(username, age, gender)
  }
  async getPrivateData({id}: IdDto): Promise<PrivateDataDto | null>{
    const user = await this.userRepository.getUserById(id)
    const {email, phonenumber} = user.getPrivateData()
    return new PrivateDataDto(email, phonenumber)
  }
}
