"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
class User extends mongoose_1.Document {
    constructor(username, email, password, phonenumber, age, gender) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.phonenumber = phonenumber;
        this.age = age;
        this.gender = gender;
    }
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
}
exports.User = User;
//# sourceMappingURL=User.entities.js.map