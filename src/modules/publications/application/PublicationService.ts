import { Inject } from "@nestjs/common";
import { Publication } from "../domain/entities/Publication";
import { PublicationResDto } from "../presentation/dtos/PublicationResDto";
import { User } from "src/modules/users/domain/entities/User.entities";
import { UserRepository } from "../../users/domain/repositories/UserRepository";
import { UserI } from "src/modules/users/domain/interface/UserI";
import { IdDto } from "../presentation/dtos/IdDto";
import { NewPublicationReqDto } from "../presentation/dtos/NewPublicationReqDto";
import { IdServiceI } from "../domain/reposotorys/IdServiceI";
import { PublicationRepository } from "../domain/reposotorys/PublicationRepository";

export class PublicationService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRespository: PublicationRepository,
        @Inject('IdService') private readonly idService:IdServiceI,
        @Inject('UserRepository') private readonly userRepository: UserRepository
    ){}

    async getUserById({id}: IdDto): Promise<User | null>{
        const user = await this.userRepository.getUserById(id)
        if(!user) return null
        return user
    }
    async userSave(user:User): Promise<UserI | null>{
        const userSave = await this.userRepository.userSave(user)
        return userSave
    }
    
    async createPublication({id}: IdDto, newPublication: NewPublicationReqDto): Promise<PublicationResDto | null>{
        const user = await this.getUserById({id})
        if(!user){
            console.log("no existe usuario")
            return null
        }
        
        const publication = {
            ...newPublication,
            _id: this.idService.generate(),
            createBy: id,
            requests: [],
            matches: [],
            publicData: user.getPublicData(),
            privateData: user.getPrivateData() 
        }
        const res = await this.publicationRespository.createPublication(publication)
        
        user.myPublications.push(res._id)
        await this.userSave(user)
        return new PublicationResDto(res)
    }

    async getPublications(): Promise<PublicationResDto[] | null>{
        const publications = await this.publicationRespository.getPublications()
        const publicationsResDto: Publication[] = []
        publications.forEach(publication=>{
            const publicationResDto = new PublicationResDto(publication)
            publicationsResDto.push(publicationResDto)
        }
        )
        return publicationsResDto
    }

    async getPublicationById( {id}:IdDto): Promise<PublicationResDto | null>{
        const user = await this.publicationRespository.getPublicationById(id)
        return new PublicationResDto(user)
    }
}