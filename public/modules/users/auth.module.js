"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const Auth_controller_1 = require("./presentation/controllers/Auth.controller");
const Auth_service_1 = require("./application/services/Auth.service");
const User_service_1 = require("./application/services/User.service");
const user_module_1 = require("./user.module");
const bcrypt_hashing_service_1 = require("./infrastructure/hashing/bcrypt.hashing.service");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [Auth_controller_1.AuthController],
        providers: [
            Auth_service_1.AuthService,
            User_service_1.UserService,
            {
                provide: "HashingService",
                useClass: bcrypt_hashing_service_1.BcryptHashingService
            }
        ],
        imports: [user_module_1.UserModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: 'asdasd',
            })
        ],
        exports: [Auth_service_1.AuthService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map