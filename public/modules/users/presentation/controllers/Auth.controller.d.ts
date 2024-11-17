import { AuthService } from "../../application/services/Auth.service";
import { Response } from "express";
import { LoginDto } from "../dtos/Login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    userLogin(dataLogin: LoginDto, response: Response): Promise<void>;
}
