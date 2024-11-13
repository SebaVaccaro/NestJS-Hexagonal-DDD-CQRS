import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { User } from '../../domain/entities/User.entities';
import { UserDto } from '../dtos/User.dto';
import { UserIdDto } from '../dtos/UserId.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/register')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userRegister(@Body() userData: UserDto): Promise<User>{
    return await this.userService.createUser(userData)
  }

  @Get('/publicdata/:userId')
  @UsePipes(new ValidationPipe({whitelist: true}))
  getPublicData(@Param() id:UserIdDto){
    return this.userService.getPublicData(id)
  }
  
  @Get('/privatedata/:userId')
  @UsePipes(new ValidationPipe({whitelist: true}))
  getPrivateData(@Param() id:UserIdDto){
    return this.userService.getPrivateData(id)
  }
  
  @Get()
  getUsers(){
    return this.userService.getUsers()
  }
  
  @Get('/:userId')
  @UsePipes(new ValidationPipe({whitelist:true}))
  getUserById(@Param() id:UserIdDto){
    return this.userService.getUserById(id)
  }
  
}
