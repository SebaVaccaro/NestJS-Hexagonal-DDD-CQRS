import { Module } from "@nestjs/common";
import { AuthController } from "./presentation/controllers/Auth.controller";
import { AuthService } from "./application/services/Auth.service";
import { UserService } from "./application/services/User.service";
import { UserModule } from "./user.module";
import { BcryptHashingService } from "./infrastructure/hashing/bcrypt.hashing.service";

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        UserService,
        {
            provide: "HashingService",
            useClass: BcryptHashingService
        }
    ],
    imports: [UserModule],
    exports: [AuthService]
})
export class AuthModule{}