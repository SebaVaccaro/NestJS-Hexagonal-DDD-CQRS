
import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/User.controller';
import { UserService } from './application/services/User.service';
import { BcryptHashingService } from './infrastructure/hashing/bcrypt.hashing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserS, UserSchema } from './infrastructure/db/UserSchema';
import { DataBaseUserRepository } from './infrastructure/db/DataBaseUserRepository';
import { IdService } from './infrastructure/id/IdService';


@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'IdService',
      useClass: IdService
    },
    {
      provide: 'UserRepository',
      useClass: DataBaseUserRepository,
    },
    { 
      provide: 'HashingService',
      useClass: BcryptHashingService,
    },
  ],
  imports:[MongooseModule.forFeature([{name: UserS.name, schema: UserSchema}])],
  exports: [
    UserService,
    'UserRepository',
    'HashingService',
    'IdService'
  ],
})
export class UserModule {}
