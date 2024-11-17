"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResDto = void 0;
class UserResDto {
    constructor(user) {
        this.username = user.username;
        this._id = user._id;
        this.email = user.email;
        this.phonenumber = user.phonenumber;
        this.age = user.age;
        this.gender = user.gender;
    }
}
exports.UserResDto = UserResDto;
//# sourceMappingURL=UserRes.dto.js.map