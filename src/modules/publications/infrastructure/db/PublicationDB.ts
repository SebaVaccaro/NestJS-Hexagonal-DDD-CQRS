import { Injectable } from "@nestjs/common";
import { PublicationRepository } from "../../domain/interfaces/PublicationRepository";
import { PublicationS } from "./PublicationSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NewPublicationI } from "../../domain/interfaces/NewPublicationInterface";
import { Publication } from "../../domain/entities/Publication";

@Injectable()
export class PublicationDB implements PublicationRepository{
    constructor(@InjectModel(PublicationS.name) private readonly publicationModel: Model<PublicationS>){}
    
    async createPublication(publication: NewPublicationI): Promise<Publication | null> {
        const newPublication = new this.publicationModel(publication)
        return await newPublication.save()
    }

    async getPublicationById(id: string): Promise<Publication | null> {
        return await this.publicationModel.findById(id)
    }

    async getPublications(): Promise<Publication[] | null> {
        return await this.publicationModel.find()
    }
}