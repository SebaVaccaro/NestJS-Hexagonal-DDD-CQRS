import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "../../application/services/Auth.service";
import { Response } from "express";
import { LoginDto } from "../dtos/UserLogin.dto";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService
    ){}
    
    @Post('login')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async userLogin(@Body() dataLogin: LoginDto, @Res() response: Response){
      
      const { access_token, user } = await this.authService.signIn(dataLogin)
      
      response.cookie('acces_token', access_token, {
        httpOnly: true
      })
      response.send(user)
    }
}