import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserLoginDto } from "../dtos/UserLogin.dto";
import { AuthService } from "../../application/services/Auth.service";
import { Response } from "express";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService
    ){}
    
    @Post('login')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async userLogin(@Body() dataLogin: UserLoginDto, @Res() response: Response){
      
      const { access_token, user } = await this.authService.signIn(dataLogin)
      
      response.cookie('acces_token', access_token, {
        httpOnly: true
      })
      response.send(user)
    }
}