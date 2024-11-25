import { Publication } from "../entities/Publication";
import { PublicationDbI } from "./PublicationDbI";

export interface PublicationRepository {
    createPublication(publication: PublicationDbI): Promise<Publication | null>
    getPublicationById(id:string): Promise<Publication | null>
    getPublications(): Promise<Publication[] | null>
}