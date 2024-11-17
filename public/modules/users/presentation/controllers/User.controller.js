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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const User_service_1 = require("../../application/services/User.service");
const User_dto_1 = require("../dtos/User.dto");
const UserId_dto_1 = require("../dtos/UserId.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async userRegister(userData) {
        return await this.userService.createUser(userData);
    }
    async getPublicData(id) {
        return await this.userService.getPublicData(id);
    }
    async getPrivateData(id) {
        return await this.userService.getPrivateData(id);
    }
    async getUsers() {
        return await this.userService.getUsers();
    }
    async getUserById(id) {
        return await this.userService.getUserById(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userRegister", null);
__decorate([
    (0, common_1.Get)('/publicdata/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserId_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPublicData", null);
__decorate([
    (0, common_1.Get)('/privatedata/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserId_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPrivateData", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserId_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [User_service_1.UserService])
], UserController);
//# sourceMappingURL=User.controller.js.map