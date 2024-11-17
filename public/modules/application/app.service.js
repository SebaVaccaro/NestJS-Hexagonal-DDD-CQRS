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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const PublicationService_1 = require("../publications/application/PublicationService");
const User_service_1 = require("../users/application/services/User.service");
let AppService = class AppService {
    constructor(userService, publicationService) {
        this.userService = userService;
        this.publicationService = publicationService;
    }
    async createPublication(newPublication) {
        const user = await this.userService.getUserById({ id: newPublication.userCreate });
        if (!user)
            return null;
        const publication = await this.publicationService.createPublication(newPublication);
        return publication;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [User_service_1.UserService,
        PublicationService_1.PublicationService])
], AppService);
//# sourceMappingURL=app.service.js.map