"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const PublicationSchema_1 = require("./infrastructure/db/PublicationSchema");
const PublicationDB_1 = require("./infrastructure/db/PublicationDB");
const PublicationService_1 = require("./application/PublicationService");
const PublicationController_1 = require("./presentation/controllers/PublicationController");
const UuidService_1 = require("./infrastructure/uuid/UuidService");
let PublicationModule = class PublicationModule {
};
exports.PublicationModule = PublicationModule;
exports.PublicationModule = PublicationModule = __decorate([
    (0, common_1.Module)({
        providers: [
            PublicationService_1.PublicationService,
            {
                provide: 'IdService',
                useClass: UuidService_1.UuidService
            },
            {
                provide: 'PublicationRepository',
                useClass: PublicationDB_1.PublicationDB
            }
        ],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: PublicationSchema_1.PublicationS.name, schema: PublicationSchema_1.PublicationSchema }])],
        controllers: [PublicationController_1.PublicationController],
        exports: [
            PublicationService_1.PublicationService,
            'PublicationRepository',
            'IdService'
        ]
    })
], PublicationModule);
//# sourceMappingURL=publication.module.js.map