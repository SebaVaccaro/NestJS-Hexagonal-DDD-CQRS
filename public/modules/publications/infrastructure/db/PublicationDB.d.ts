import { PublicationRepository } from "../../domain/interfaces/PublicationRepository";
import { PublicationS } from "./PublicationSchema";
import { Model } from "mongoose";
import { NewPublicationI } from "../../domain/interfaces/NewPublicationInterface";
import { Publication } from "../../domain/entities/Publication";
export declare class PublicationDB implements PublicationRepository {
    private readonly publicationModel;
    constructor(publicationModel: Model<PublicationS>);
    createPublication(publication: NewPublicationI): Promise<Publication | null>;
    getPublicationById(id: string): Promise<Publication | null>;
    getPublications(): Promise<Publication[] | null>;
}
