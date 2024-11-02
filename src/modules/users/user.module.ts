// src/modules/users/user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/User.controller';
import { UserService } from './application/services/User.service';
import { InMemoryUserRepository } from './infrastructure/persistence/UserRepository';
import { BcryptHashingService } from './infrastructure/hashing/bcrypt.hashing.service';


@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: InMemoryUserRepository,
    },
    { 
      provide: 'HashingService',
      useClass: BcryptHashingService,
    },
  ],
  exports: [UserService], // Exporta el servicio si lo necesitas en otros módulos
})
export class UserModule {}
