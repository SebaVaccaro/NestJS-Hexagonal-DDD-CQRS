import { Inject, Injectable } from "@nestjs/common";
import { UserLoginDto } from "../../presentation/dtos/UserLogin.dto";
import { HashingService } from "../../domain/interface/hashing.service.interface";
import { UserService } from "./User.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../../domain/entities/User.entities";
import { UserEmailDto } from "../../presentation/dtos/UserEmail.dto";

@Injectable()
export class AuthService{
    constructor(
        @Inject('HashingService') private readonly hashing: HashingService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
      ){}
    async signIn(userloginDto: UserLoginDto): Promise<{access_token: string, user: User}> {
        const emailDto = new UserEmailDto()
        emailDto.email = userloginDto.email
        const user = await this.userService.getUserByEmail(emailDto)
        
        const matchPassword = await this.hashing.compare( userloginDto.password, user?.password)
        if(!matchPassword) return null
        
        const payload = { userId: user._id, username: user.username}
        return{
            access_token: await this.jwtService.signAsync(payload),
            user
        }
    }
}