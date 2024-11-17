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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const UserRes_dto_1 = require("../../presentation/dtos/UserRes.dto");
let UserService = class UserService {
    constructor(userRepository, hashingService, idService) {
        this.userRepository = userRepository;
        this.hashingService = hashingService;
        this.idService = idService;
    }
    async createUser(data) {
        const password = await this.hashingService.hash(data.password);
        const newUser = {
            _id: this.idService.generate(),
            username: data.username,
            email: data.email,
            password,
            phonenumber: data.phonenumber,
            age: data.age,
            gender: data.gender
        };
        const user = await this.userRepository.addUser(newUser);
        return new UserRes_dto_1.UserResDto(user);
    }
    async getUsers() {
        const users = await this.userRepository.getUsers();
        const usersResDto = [];
        users.map(user => {
            const userResDto = new UserRes_dto_1.UserResDto(user);
            usersResDto.push(userResDto);
        });
        return usersResDto;
    }
    async getUserById({ id }) {
        const user = await this.userRepository.getUserById(id);
        if (!user)
            return null;
        return new UserRes_dto_1.UserResDto(user);
    }
    async getUserByEmail({ email }) {
        return await this.userRepository.getUserByEmail(email);
    }
    async getPublicData({ id }) {
        const user = await this.userRepository.getUserById(id);
        const publicData = user.getPublicData();
        return publicData;
    }
    async getPrivateData({ id }) {
        const user = await this.userRepository.getUserById(id);
        const privateData = user.getPrivateData();
        return privateData;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UserRepository')),
    __param(1, (0, common_1.Inject)('HashingService')),
    __param(2, (0, common_1.Inject)('IdService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], UserService);
//# sourceMappingURL=User.service.js.map