import { Module } from "@nestjs/common";
import { AuthController } from "./presentation/controllers/Auth.controller";
import { AuthService } from "./application/services/Auth.service";
import { UserService } from "./application/services/User.service";
import { UserModule } from "./user.module";
import { BcryptHashingService } from "./infrastructure/hashing/bcrypt.hashing.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";

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
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal:true
          }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET_KEY,
        })
    ],
    exports: [AuthService]
})
export class AuthModule{}