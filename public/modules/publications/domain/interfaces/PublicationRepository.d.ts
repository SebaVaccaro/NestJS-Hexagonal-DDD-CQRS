import { Publication } from "../entities/Publication";
import { NewPublicationI } from "./NewPublicationInterface";
export interface PublicationRepository {
    createPublication(publication: NewPublicationI): Promise<Publication | null>;
    getPublicationById(id: string): Promise<Publication | null>;
    getPublications(): Promise<Publication[] | null>;
}
