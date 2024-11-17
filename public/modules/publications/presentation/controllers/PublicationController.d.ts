import { PublicationService } from "../../application/PublicationService";
import { PublicationS } from "../../infrastructure/db/PublicationSchema";
export declare class PublicationController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
    getPublications(): Promise<PublicationS[] | null>;
}
