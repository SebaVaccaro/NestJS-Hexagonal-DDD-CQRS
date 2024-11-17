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
exports.PublicationDB = void 0;
const common_1 = require("@nestjs/common");
const PublicationSchema_1 = require("./PublicationSchema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PublicationDB = class PublicationDB {
    constructor(publicationModel) {
        this.publicationModel = publicationModel;
    }
    async createPublication(publication) {
        const newPublication = new this.publicationModel(publication);
        return await newPublication.save();
    }
    async getPublicationById(id) {
        return await this.publicationModel.findById(id);
    }
    async getPublications() {
        return await this.publicationModel.find();
    }
};
exports.PublicationDB = PublicationDB;
exports.PublicationDB = PublicationDB = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(PublicationSchema_1.PublicationS.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PublicationDB);
//# sourceMappingURL=PublicationDB.js.map