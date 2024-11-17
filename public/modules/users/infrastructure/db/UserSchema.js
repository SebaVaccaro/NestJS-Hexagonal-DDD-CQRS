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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserS = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let UserS = class UserS {
    getPublicData() {
        return {
            username: this.username,
            age: this.age,
            gender: this.gender
        };
    }
    getPrivateData() {
        return {
            email: this.email,
            phonenumber: this.phonenumber
        };
    }
};
exports.UserS = UserS;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], UserS.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserS.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserS.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserS.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserS.prototype, "phonenumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserS.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserS.prototype, "gender", void 0);
exports.UserS = UserS = __decorate([
    (0, mongoose_1.Schema)()
], UserS);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserS);
//# sourceMappingURL=UserSchema.js.map