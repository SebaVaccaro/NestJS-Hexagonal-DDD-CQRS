import { PublicationService } from "../publications/application/PublicationService";
import { Publication } from "../publications/domain/entities/Publication";
import { NewPublicationI } from "../publications/domain/interfaces/NewPublicationInterface";
import { UserService } from "../users/application/services/User.service";
export declare class AppService {
    private readonly userService;
    private readonly publicationService;
    constructor(userService: UserService, publicationService: PublicationService);
    createPublication(newPublication: NewPublicationI): Promise<Publication | null>;
}
