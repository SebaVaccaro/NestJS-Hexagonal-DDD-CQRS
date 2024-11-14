import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { UserDto } from '../dtos/User.dto';
import { UserIdDto } from '../dtos/UserId.dto';
import { UserS } from '../../infrastructure/db/UserSchema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Post('/register')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userRegister(@Body() userData: UserDto): Promise<UserS>{
    return await this.userService.createUser(userData)
  }

  @Get('/publicdata/:userId')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async getPublicData(@Param() id:UserIdDto){
    return await this.userService.getPublicData(id)
  }
  
  @Get('/privatedata/:userId')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async getPrivateData(@Param() id:UserIdDto){
    return await this.userService.getPrivateData(id)
  }
  
  @Get()
  async getUsers(){
    return await this.userService.getUsers()
  }
  
  @Get('/:userId')
  @UsePipes(new ValidationPipe({whitelist:true}))
  async getUserById(@Param() id:UserIdDto){
    return await this.userService.getUserById(id)
  }
  
}
