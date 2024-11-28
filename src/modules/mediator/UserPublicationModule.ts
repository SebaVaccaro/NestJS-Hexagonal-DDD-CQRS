import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DataBaseUserRepository } from "../users/infrastructure/db/DataBaseUserRepository";
import { UserS, UserSchema } from "../users/infrastructure/db/UserSchema";
import { PublicationS, PublicationSchema } from "../publications/infrastructure/db/PublicationSchema";
import { PublicationDB } from "../publications/infrastructure/db/PublicationDB";
import { MediatorService } from "./UserPublication/MediatorService";

@Module({
    providers: [
        MediatorService,
        {
          provide: 'UserRepository',
          useClass: DataBaseUserRepository,
        },
        {
            provide: 'PublicationRepository',
            useClass: PublicationDB
        }
    ],
    imports:[
        MongooseModule.forFeature([{name: UserS.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: PublicationS.name, schema: PublicationSchema}])
    ],
    exports:[
        MediatorService
    ]
    
})
export class UserPublicationModule{}