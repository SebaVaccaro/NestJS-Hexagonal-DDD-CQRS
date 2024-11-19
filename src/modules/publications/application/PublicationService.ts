import { Inject } from "@nestjs/common";
import { PublicationRepository } from "../domain/interfaces/PublicationRepository";
import { NewPublicationI } from "../domain/interfaces/NewPublicationInterface";
import { Publication } from "../domain/entities/Publication";
import { IdServiceI } from "../domain/interfaces/IdServiceI";
import { IdI } from "../domain/interfaces/IdI";

export class PublicationService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRespository: PublicationRepository,
        @Inject('IdService') private readonly idService:IdServiceI
    ){}

    async createPublication(newPublication: NewPublicationI): Promise<Publication>{
        const publication = {...newPublication, _id: this.idService.generate()}
        return await this.publicationRespository.createPublication(publication)
    }

    async getPublications(): Promise<Publication[] | null>{
        return await this.publicationRespository.getPublications()
    }

    async getPublicationById( {id}:IdI): Promise<Publication | null>{
        return await this.publicationRespository.getPublicationById(id)
    }
}