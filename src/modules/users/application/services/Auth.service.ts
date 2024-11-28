import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { HashingService } from "../../domain/interface/hashing.service.interface";
import { JwtService } from "@nestjs/jwt";
import { UserResDto } from "../../presentation/dtos/UserRes.dto";
import { LoginDto } from "../../presentation/dtos/Login.dto";
import { EmailDto } from "../../presentation/dtos/Email.dto";
import { User } from "../../domain/entities/User.entities";
import { UserRepository } from "../../domain/repositories/UserRepository";

@Injectable()
export class AuthService{
    constructor(
        @Inject('HashingService') private readonly hashing: HashingService,
        @Inject('UserRepository') private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
      ){}
    
      async getByEmail({email}: EmailDto): Promise<User>{
            return await this.userRepository.getUserByEmail(email)
      }

      async signIn({email, password}: LoginDto): Promise<{access_token: string, user: UserResDto}> {
        
        if(!email) throw new HttpException("email is required", HttpStatus.BAD_REQUEST)

        const user = await this.getByEmail({email})
        if(!user)throw new HttpException("email unexistend", HttpStatus.NOT_FOUND)
        
        const matchPassword = await this.hashing.compare( password, user?.password)
        if(!matchPassword) throw new HttpException("invalid password", HttpStatus.FORBIDDEN)
        
        const payload = { userId: user._id, username: user.username}
        const access_token = await this.jwtService.signAsync(payload)
        

        const userResDto = new UserResDto(user)
        
        return{
            access_token,
            user: userResDto
        }
    }
}