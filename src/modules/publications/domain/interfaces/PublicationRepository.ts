import { PublicationS } from "../../infrastructure/db/PublicationSchema";

export interface PublicationRepository {
    createPublication(
        publication: {
            _id: string
            description: string
            privateData: string
            userCreate: string
            requests: string[]
            matches: string[]
        }
    ): Promise<PublicationS | null>
    getPublicationById(id:string): Promise<PublicationS | null>
    getPublications(): Promise<PublicationS[] | null>
}