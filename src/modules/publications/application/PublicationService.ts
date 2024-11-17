import { Inject } from "@nestjs/common";
import { PublicationRepository } from "../domain/interfaces/PublicationRepository";
import { IdService } from "../domain/interfaces/IdService";
import { NewPublicationI } from "../domain/interfaces/NewPublicationInterface";
import { Publication } from "../domain/entities/Publication";

export class PublicationService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRespository: PublicationRepository,
        @Inject('IdService') private readonly idService:IdService
    ){}

    async createPublication(newPublication: NewPublicationI): Promise<Publication>{
        const publication = {...newPublication, _id: this.idService.generate()}
        return await this.publicationRespository.createPublication(publication)
    }

    async getPublications(): Promise<Publication[] | null>{
        return this.publicationRespository.getPublications()
    }
}