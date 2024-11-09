import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserLoginDto } from "../dtos/userLogin.dto";
import { User } from "../../domain/entities/User.entities";
import { AuthService } from "../../application/services/Auth.service";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService
    ){}
    
    @Post('login')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async userLogin(@Body() userDataLogin: UserLoginDto): Promise<User | null>{
      return this.authService.signIn(userDataLogin)
    }
}