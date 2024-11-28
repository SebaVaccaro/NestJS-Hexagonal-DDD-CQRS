import { Publication } from "../entities/Publication"
import { PublicationDbI } from "../interfaces/PublicationDbI"

export interface PublicationRepository {
    create(publication: PublicationDbI): Promise<Publication | null>
    getById(id:string): Promise<Publication | null>
    getAll(): Promise<Publication[] | null>
    delete(id: string): Promise<Publication | null>
    update(data: Publication): Promise<Publication | null>
}