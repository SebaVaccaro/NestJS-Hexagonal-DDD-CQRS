"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const User_controller_1 = require("./presentation/controllers/User.controller");
const User_service_1 = require("./application/services/User.service");
const bcrypt_hashing_service_1 = require("./infrastructure/hashing/bcrypt.hashing.service");
const mongoose_1 = require("@nestjs/mongoose");
const UserSchema_1 = require("./infrastructure/db/UserSchema");
const DataBaseUserRepository_1 = require("./infrastructure/db/DataBaseUserRepository");
const IdService_1 = require("./infrastructure/id/IdService");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [User_controller_1.UserController],
        providers: [
            User_service_1.UserService,
            {
                provide: 'IdService',
                useClass: IdService_1.IdService
            },
            {
                provide: 'UserRepository',
                useClass: DataBaseUserRepository_1.DataBaseUserRepository,
            },
            {
                provide: 'HashingService',
                useClass: bcrypt_hashing_service_1.BcryptHashingService,
            },
        ],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: UserSchema_1.UserS.name, schema: UserSchema_1.UserSchema }])],
        exports: [
            User_service_1.UserService,
            'UserRepository',
            'HashingService',
            'IdService'
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map