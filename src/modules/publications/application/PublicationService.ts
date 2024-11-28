import { Inject } from "@nestjs/common";
import { Publication } from "../domain/entities/Publication";
import { PublicationResDto } from "../presentation/dtos/PublicationResDto";
import { IdDto } from "../presentation/dtos/IdDto";
import { NewPublicationReqDto } from "../presentation/dtos/NewPublicationReqDto";
import { IdServiceI } from "../domain/reposotorys/IdServiceI";
import { PublicationRepository } from "../domain/reposotorys/PublicationRepository";
import { PublicPublicationProfileResDto } from "../presentation/dtos/PublicPublicationProfile.dto";
import { PublicationReqDto } from "../presentation/dtos/PublicationReq.dto";
import { MediatorService } from "../../mediator/UserPublication/MediatorService";

export class PublicationService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRepository: PublicationRepository,
        @Inject('IdService') private readonly idService:IdServiceI,
        private readonly mediatorService: MediatorService
    ){}
    
    async create({id}: IdDto, newPublication: NewPublicationReqDto): Promise<PublicationResDto | null>{
        
        const publication = {
            ...newPublication,
            _id: this.idService.generate(),
            createBy: id,
            requests: [],
            matches: [],
        }
        const res = await this.mediatorService.createPublication(publication, id)
        return new PublicationResDto(res)
    }

    async getAll(): Promise<PublicationResDto[] | null>{
        const publications = await this.publicationRepository.getAll()
        const publicationsResDto: Publication[] = []
        publications.forEach(publication=>{
            const publicationResDto = new PublicationResDto(publication)
            publicationsResDto.push(publicationResDto)
        }
        )
        return publicationsResDto
    }

    async getById( {id}:IdDto): Promise<PublicationResDto | null>{
        const user = await this.publicationRepository.getById(id)
        return new PublicationResDto(user)
    }

    async getPublicProfile({id}:IdDto): Promise<PublicPublicationProfileResDto | null>{
        const publication = await this.publicationRepository.getById(id)
        return new PublicPublicationProfileResDto(publication)
    }

    async delete({id}:IdDto): Promise<PublicationResDto | null>{
        return await this.publicationRepository.delete(id)
    }

    async update({id}: IdDto, data:PublicationReqDto): Promise<PublicationResDto | null>{
        if(id !== data._id) return null
        const publication = await this.publicationRepository.update(data)
        return new PublicationResDto(publication)
    }
}