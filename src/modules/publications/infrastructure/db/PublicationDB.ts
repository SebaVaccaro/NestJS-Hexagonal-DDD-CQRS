import { Injectable } from "@nestjs/common";
import { PublicationRepository } from "../../domain/interfaces/PublicationRepository";
import { PublicationS } from "./PublicationSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Publication } from "../../domain/entities/Publication";
import { NewPublicationDbI } from "../../domain/interfaces/NewPublicationDbI";

@Injectable()
export class PublicationDB implements PublicationRepository{
    constructor(@InjectModel(PublicationS.name) private readonly publicationModel: Model<PublicationS>){}
    
    async createPublication(publication: NewPublicationDbI): Promise<Publication | null> {
        const newPublication = new this.publicationModel(publication)
        const res = await newPublication.save()
        return new Publication(res)
    }

    async getPublicationById(id: string): Promise<Publication | null> {
        const resUser = await this.publicationModel.findById(id)
        return new Publication(resUser)
    }

    async getPublications(): Promise<Publication[] | null> {
        const resUsers = await this.publicationModel.find()
        const users = []
        resUsers.map(resUser=>{
            const user = new Publication(resUser)
            users.push(user)
        })
        return users
    }
}