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
exports.DataBaseUserRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const UserSchema_1 = require("./UserSchema");
let DataBaseUserRepository = class DataBaseUserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async addUser(user) {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
    async deleteUser(id) {
        const res = await this.userModel.findByIdAndDelete(id);
        return res;
    }
    async getUsers() {
        return await this.userModel.find();
    }
    async getUserById(id) {
        const user = await this.userModel.findById(id);
        return user;
    }
    async getUserByEmail(email) {
        try {
            const user = await this.userModel.findOne({ email });
            return user;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
};
exports.DataBaseUserRepository = DataBaseUserRepository;
exports.DataBaseUserRepository = DataBaseUserRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(UserSchema_1.UserS.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DataBaseUserRepository);
//# sourceMappingURL=DataBaseUserRepository.js.map