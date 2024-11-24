import { Inject } from "@nestjs/common";
import { PublicationRepository } from "../domain/interfaces/PublicationRepository";
import { NewPublicationI } from "../domain/interfaces/NewPublicationInterface";
import { Publication } from "../domain/entities/Publication";
import { IdServiceI } from "../domain/interfaces/IdServiceI";
import { IdI } from "../domain/interfaces/IdI";
import { PublicationResDto } from "../presentation/dtos/PublicationResDto";
import { IdInterface } from "src/modules/users/domain/interface/IdInterface";
import { User } from "src/modules/users/domain/entities/User.entities";
import { UserRepository } from "../../users/domain/repositories/UserRepository";
import { UserI } from "src/modules/users/domain/interface/UserI";

export class PublicationService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRespository: PublicationRepository,
        @Inject('IdService') private readonly idService:IdServiceI,
        @Inject('UserRepository') private readonly userRepository: UserRepository
    ){}

    async getUserById({id}: IdInterface): Promise<User | null>{
        const user = await this.userRepository.getUserById(id)
        if(!user) return null
        return user
    }
    async userSave(user:User): Promise<UserI | null>{
        return await this.userRepository.userSave(user)
    }
    
    async createPublication({id}: IdI, newPublication: NewPublicationI): Promise<PublicationResDto | null>{
        const user = await this.getUserById({id})
        if(!user){
            console.log("no existe usuario")
            return null
        }
        const publication = {...newPublication, _id: this.idService.generate(), createBy: id}
        const res = await this.publicationRespository.createPublication(publication)
        user.myPublications.push(res._id)
        console.log(res)
        console.log(user)
        await this.userSave(user)
        return new PublicationResDto(res)
    }

    async getPublications(): Promise<Publication[] | null>{
        return await this.publicationRespository.getPublications()
    }

    async getPublicationById( {id}:IdI): Promise<PublicationResDto | null>{
        const user = await this.publicationRespository.getPublicationById(id)
        return new PublicationResDto(user)
    }
}