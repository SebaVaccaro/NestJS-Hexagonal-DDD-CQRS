import { HashingService } from "../../domain/interface/hashing.service.interface";
import { UserService } from "./User.service";
import { JwtService } from "@nestjs/jwt";
import { UserResDto } from "../../presentation/dtos/UserRes.dto";
import { LoginInterface } from "../../domain/interface/Login.interface";
export declare class AuthService {
    private readonly hashing;
    private readonly userService;
    private readonly jwtService;
    constructor(hashing: HashingService, userService: UserService, jwtService: JwtService);
    signIn(loginData: LoginInterface): Promise<{
        access_token: string;
        user: UserResDto;
    }>;
}
