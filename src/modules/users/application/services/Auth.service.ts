import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { HashingService } from "../../domain/interface/hashing.service.interface";
import { UserService } from "./User.service";
import { JwtService } from "@nestjs/jwt";
import { UserResDto } from "../../presentation/dtos/UserRes.dto";
import { LoginInterface } from "../../domain/interface/Login.interface";

@Injectable()
export class AuthService{
    constructor(
        @Inject('HashingService') private readonly hashing: HashingService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
      ){}
    
      async signIn({email, password}: LoginInterface): Promise<{access_token: string, user: UserResDto}> {
        
        if(!email) throw new HttpException("email is required", HttpStatus.BAD_REQUEST)

        const user = await this.userService.getUserByEmail({email})
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