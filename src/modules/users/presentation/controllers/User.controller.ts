import { Body, Controller, Get, Param, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../../application/services/User.service';
import { UserIdDto } from '../dtos/Id.dto';
import { UserResDto } from '../dtos/UserRes.dto';
import { NewUserDto } from '../dtos/NewUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Post('/register')
  @UsePipes(new ValidationPipe({whitelist: true}))
  async userRegister(@Body() userData: NewUserDto): Promise<UserResDto>{
    return await this.userService.create(userData)
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
  async getAll(): Promise<UserResDto[]>{
    return await this.userService.getAll()
  }
  
  @Get('/:id')
  @UsePipes(new ValidationPipe({whitelist:true}))
  async getById(@Param() id:UserIdDto): Promise<UserResDto>{
    return await this.userService.getById(id)
  }
  
}
