import { Body, Controller, Get, Param, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { UserDto } from '../dtos/User.dto';
import { UserIdDto } from '../dtos/UserId.dto';
import { UserResDto } from '../dtos/UserRes.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Post('/register')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userRegister(@Body() userData: UserDto): Promise<UserResDto>{
    return await this.userService.createUser(userData)
  }

  @Get('/publicdata/:id')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async getPublicData(@Param() id:UserIdDto){
    return await this.userService.getPublicData(id)
  }
  
  @Get('/privatedata/:id')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async getPrivateData(@Param() id:UserIdDto){
    return await this.userService.getPrivateData(id)
  }
  
  @Get()
  async getUsers(): Promise<UserResDto[]>{
    return await this.userService.getUsers()
  }
  
  @Get('/:id')
  @UsePipes(new ValidationPipe({whitelist:true}))
  async getUserById(@Param() id:UserIdDto): Promise<UserResDto>{
    return await this.userService.getUserById(id)
  }
  
}
