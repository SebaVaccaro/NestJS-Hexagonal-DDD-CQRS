import { Inject } from "@nestjs/common";
import { PublicationRepository } from "../domain/interfaces/PublicationRepository";
import { PublicationDto } from "../presentation/dtos/PublicationDto";
import { IdService } from "../domain/interfaces/IdService";
import { PublicationS } from "../infrastructure/db/PublicationSchema";

export class PublicationService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRespository: PublicationRepository,
        @Inject('IdService') private readonly idService:IdService
    ){}

    async createPublication(publicationDto: PublicationDto){
        const publication = {...publicationDto, _id: this.idService.generate()}
        return await this.publicationRespository.createPublication(publication)
    }

    async getPublications(): Promise<PublicationS[] | null>{
        return this.publicationRespository.getPublications()
    }
}