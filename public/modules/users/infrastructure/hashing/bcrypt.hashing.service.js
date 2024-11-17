"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHashingService = void 0;
const bcrypt = require("bcrypt");
class BcryptHashingService {
    async hash(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    async compare(password, hash) {
        const match = await bcrypt.compare(password, hash);
        return match;
    }
}
exports.BcryptHashingService = BcryptHashingService;
//# sourceMappingURL=bcrypt.hashing.service.js.map