import { PublicationService } from "../publications/application/PublicationService";
import { PublicationS } from "../publications/infrastructure/db/PublicationSchema";
import { PublicationDto } from "../publications/presentation/dtos/PublicationDto";
import { UserService } from "../users/application/services/User.service";

export class AppService{
    constructor(
        private readonly userService: UserService,
        private readonly publicationService: PublicationService
    ){}
    createPublication(publication: PublicationDto):Promise<PublicationS | null>{
        const user = this.userService.getUserById(publication.userCreate)
        return 
    }
}