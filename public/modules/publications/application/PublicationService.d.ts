import { PublicationRepository } from "../domain/interfaces/PublicationRepository";
import { IdService } from "../domain/interfaces/IdService";
import { NewPublicationI } from "../domain/interfaces/NewPublicationInterface";
import { Publication } from "../domain/entities/Publication";
export declare class PublicationService {
    private readonly publicationRespository;
    private readonly idService;
    constructor(publicationRespository: PublicationRepository, idService: IdService);
    createPublication(newPublication: NewPublicationI): Promise<Publication>;
    getPublications(): Promise<Publication[] | null>;
}
