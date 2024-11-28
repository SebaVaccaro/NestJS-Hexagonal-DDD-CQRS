import { Injectable } from "@nestjs/common";
import { PublicationS } from "./PublicationSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Publication } from "../../domain/entities/Publication";
import { PublicationDbI } from "../../domain/interfaces/PublicationDbI";
import { PublicationRepository } from "../../domain/reposotorys/PublicationRepository";

@Injectable()
export class PublicationDB implements PublicationRepository{
    constructor(@InjectModel(PublicationS.name) private readonly publicationModel: Model<PublicationS>){}
    
    async create(publication: PublicationDbI): Promise<Publication | null> {
        const newPublication = new this.publicationModel(publication)
        const res = await newPublication.save()
        return new Publication(res)
    }

    async getById(id: string): Promise<Publication | null> {
        const resUser = await this.publicationModel.findById(id)
        return new Publication(resUser)
    }

    async getAll(): Promise<Publication[] | null> {
        const resUsers = await this.publicationModel.find()
        const users = []
        resUsers.map(resUser=>{
            const user = new Publication(resUser)
            users.push(user)
        })
        return users
    }

    async delete(id: string): Promise<Publication | null>{
        const res = await this.publicationModel.findByIdAndDelete(id)
        return res
    }

    async update(data: Publication): Promise<Publication | null>{
        return await this.publicationModel.findByIdAndUpdate(data._id, data, {new: true})
    }
}