import { Injectable } from "@nestjs/common";
import { PublicationService } from "../publications/application/PublicationService";
import { Publication } from "../publications/domain/entities/Publication";
import { NewPublicationI } from "../publications/domain/interfaces/NewPublicationInterface";
import { UserService } from "../users/application/services/User.service";

@Injectable()
export class AppService{
    constructor(
        private readonly userService: UserService,
        private readonly publicationService: PublicationService
    ){}
    async createPublication(newPublication: NewPublicationI):Promise<Publication | null>{
        const user= await this.userService.getUserById({id: newPublication.userCreate})
        if(!user)return null
        const publication = await this.publicationService.createPublication(newPublication)
        return  publication
    }
}