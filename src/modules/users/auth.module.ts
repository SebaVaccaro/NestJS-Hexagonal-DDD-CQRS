import { Module } from "@nestjs/common";
import { AuthService } from "./application/services/Auth.service";
import { BcryptHashingService } from "./infrastructure/hashing/bcrypt.hashing.service";
import { InMemoryUserRepository } from "./infrastructure/persistence/UserRepository";
import { AuthController } from "./presentation/controllers/Auth.controller";
import { UserService } from "./application/services/User.service";

@Module({
    controllers:[AuthController],
    providers:[
        AuthService,
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
    exports:[AuthService]
})
export class AuthModule{}