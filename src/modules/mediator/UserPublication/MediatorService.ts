import { Inject} from "@nestjs/common";
import { Publication } from "../../publications/domain/entities/Publication";
import { PublicationMediatorI } from "../../publications/domain/interfaces/PublicationMediatorI";
import { PublicationRepository } from "../../publications/domain/reposotorys/PublicationRepository";
import { UserRepository } from "../../users/domain/repositories/UserRepository";


export class MediatorService{
    constructor(
        @Inject('PublicationRepository') private readonly publicationRepository: PublicationRepository,
        @Inject('UserRepository') private readonly userRepository: UserRepository, 
    ){}

    async createPublication(publication: PublicationMediatorI, id: string): Promise<Publication | null>{
        const user = await this.userRepository.getUserById(id)
        if(!user){
            console.log("no existe usuario")
            return null
        }
        user.myPublications.push(publication._id)
        await this.userRepository.userSave(user)
        
        const newPublication = {...publication, userData: user.getPublicData()}
        return await this.publicationRepository.create(newPublication)
    }

}