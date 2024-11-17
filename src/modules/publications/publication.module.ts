import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PublicationS, PublicationSchema } from "./infrastructure/db/PublicationSchema";
import { PublicationDB } from "./infrastructure/db/PublicationDB";
import { PublicationService } from "./application/PublicationService";
import { PublicationController } from "./presentation/controllers/PublicationController";
import { UuidService } from "./infrastructure/uuid/UuidService";

@Module({
    providers:[
        PublicationService,
        {
            provide: 'IdService',
            useClass: UuidService
        },
        {
            provide: 'PublicationRepository',
            useClass: PublicationDB
        }
    ],
    imports:[MongooseModule.forFeature([{name: PublicationS.name, schema: PublicationSchema}])],
    controllers:[PublicationController],
    exports:[
        PublicationService,
        'PublicationRepository',
        'IdService'

    ]
})
export class PublicationModule{}