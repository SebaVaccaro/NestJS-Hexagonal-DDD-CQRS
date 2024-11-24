import { Publication } from "../entities/Publication";
import { NewPublicationDbI } from "./NewPublicationDbI";
import { NewPublicationI } from "./NewPublicationInterface";

export interface PublicationRepository {
    createPublication(publication: NewPublicationDbI): Promise<Publication | null>
    getPublicationById(id:string): Promise<Publication | null>
    getPublications(): Promise<Publication[] | null>
}