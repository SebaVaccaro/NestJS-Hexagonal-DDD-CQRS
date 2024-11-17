"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidService = void 0;
const uuid_1 = require("uuid");
class UuidService {
    generate() {
        return (0, uuid_1.v4)();
    }
}
exports.UuidService = UuidService;
//# sourceMappingURL=UuidService.js.map