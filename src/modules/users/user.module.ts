
import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/User.controller';
import { UserService } from './application/services/User.service';
import { BcryptHashingService } from './infrastructure/hashing/bcrypt.hashing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './domain/entities/User.entities';
import { UserSchema } from './infrastructure/db/UserSchema';
import { DataBaseUserRepository } from './infrastructure/db/DataBaseUserRepository';


@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: DataBaseUserRepository,
    },
    { 
      provide: 'HashingService',
      useClass: BcryptHashingService,
    },
  ],
  imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  exports: [
    UserService,
    'UserRepository',
    'HashingService'
  ],
})
export class UserModule {}
