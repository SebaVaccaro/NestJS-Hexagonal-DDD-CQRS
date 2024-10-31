// src/modules/users/user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/User.controller';
import { UserService } from './infrastructure/services/User.service';
import { InMemoryUserRepository } from './infrastructure/persistence/UserRepository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: InMemoryUserRepository,
    },
  ],
  exports: [UserService], // Exporta el servicio si lo necesitas en otros módulos
})
export class UserModule {}
