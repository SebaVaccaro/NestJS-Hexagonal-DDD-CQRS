"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const User_service_1 = require("./User.service");
const jwt_1 = require("@nestjs/jwt");
const UserRes_dto_1 = require("../../presentation/dtos/UserRes.dto");
let AuthService = class AuthService {
    constructor(hashing, userService, jwtService) {
        this.hashing = hashing;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(loginData) {
        if (!loginData.email)
            throw new common_1.HttpException("email is required", common_1.HttpStatus.BAD_REQUEST);
        const user = await this.userService.getUserByEmail({ email: loginData.email });
        if (!user)
            throw new common_1.HttpException("email unexistend", common_1.HttpStatus.NOT_FOUND);
        const matchPassword = await this.hashing.compare(loginData.password, user?.password);
        if (!matchPassword)
            throw new common_1.HttpException("invalid password", common_1.HttpStatus.FORBIDDEN);
        const payload = { userId: user._id, username: user.username };
        const access_token = await this.jwtService.signAsync(payload);
        const userResDto = new UserRes_dto_1.UserResDto(user);
        return {
            access_token,
            user: userResDto
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('HashingService')),
    __metadata("design:paramtypes", [Object, User_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=Auth.service.js.map