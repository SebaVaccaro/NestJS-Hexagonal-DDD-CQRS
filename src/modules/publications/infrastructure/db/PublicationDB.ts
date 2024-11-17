import { Injectable } from "@nestjs/common";
import { PublicationRepository } from "../../domain/interfaces/PublicationRepository";
import { PublicationS } from "./PublicationSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class PublicationDB implements PublicationRepository{
    constructor(@InjectModel(PublicationS.name) private readonly publicationModel: Model<PublicationS>){}
    
    async createPublication(publication: {
        _id: string;
        description: string;
        privateData: string;
        userCreate: string;
        requests: string[];
        matches: string[];
    }): Promise<PublicationS | null> {
        const newPublication = new this.publicationModel(publication)
        return await newPublication.save()
    }

    async getPublicationById(id: string): Promise<PublicationS | null> {
        return await this.publicationModel.findById(id)
    }

    async getPublications(): Promise<PublicationS[] | null> {
        return await this.publicationModel.find()
    }
}