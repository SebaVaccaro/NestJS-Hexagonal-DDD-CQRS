import { Inject, Injectable } from "@nestjs/common";
import { UserLoginDto } from "../../presentation/dtos/userLogin.dto";
import { HashingService } from "../../domain/interface/hashing.service.interface";
import { User } from "../../domain/entities/User.entities";
import { GetUserByEmailDto } from "../../presentation/dtos/getUserByEmail.dto";
import { UserService } from "./User.service";

@Injectable()
export class AuthService{
    constructor(
        @Inject('HashingService') private readonly hashing: HashingService,
        private readonly userService: UserService
      ){}
    signIn(userloginDto: UserLoginDto): User | null{
        const emailDto = new GetUserByEmailDto()
        emailDto.email = userloginDto.email
        const user = this.userService.getUserByEmail(emailDto)
        const matchPassword = this.hashing.compare( user.password, userloginDto.password)
        if(!matchPassword) return null
        return user
    }
}