import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserLoginDto } from "../../presentation/dtos/UserLogin.dto";
import { HashingService } from "../../domain/interface/hashing.service.interface";
import { UserService } from "./User.service";
import { JwtService } from "@nestjs/jwt";
import { UserS } from "../../infrastructure/db/UserSchema";

@Injectable()
export class AuthService{
    constructor(
        @Inject('HashingService') private readonly hashing: HashingService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
      ){}
    
      async signIn(userloginDto: UserLoginDto): Promise<{access_token: string, user: UserS}> {
        
        if(!userloginDto.email) throw new HttpException("email is required", HttpStatus.BAD_REQUEST)

        const user = await this.userService.getUserByEmail(userloginDto)
        if(!user)throw new HttpException("email unexistend", HttpStatus.NOT_FOUND)
        
        const matchPassword = await this.hashing.compare( userloginDto.password, user?.password)
        if(!matchPassword) throw new HttpException("invalid password", HttpStatus.FORBIDDEN)
        
        const payload = { userId: user._id, username: user.username}
        const access_token = await this.jwtService.signAsync(payload)
        
        return{
            access_token,
            user
        }
    }
}