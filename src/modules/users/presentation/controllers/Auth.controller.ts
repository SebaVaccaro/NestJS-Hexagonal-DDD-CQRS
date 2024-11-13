import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserLoginDto } from "../dtos/userLogin.dto";
import { AuthService } from "../../application/services/Auth.service";
import { Response } from "express";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService
    ){}
    
    @Post('login')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async userLogin(@Body() userDataLogin: UserLoginDto, @Res() response: Response){
      const { access_token, user } = await this.authService.signIn(userDataLogin)
      response.cookie('acces_token', access_token, {
        httpOnly: true
      })
      response.send(user)
    }
}