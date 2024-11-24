import { Publication } from "../../domain/entities/Publication"
import { PublicationResDtoI } from "../../domain/interfaces/PublicationResDtoI"

export class PublicationResDto{
    _id: string
    createBy: string
    description: string
    publicData: string[]
    privateData: string[]
    requests: string[]
    matches: string[]
    constructor(publication: PublicationResDtoI){
        this._id = publication._id
        this.createBy = publication.createBy
        this.description = publication.description
        this.publicData = publication.publicData
        this.privateData = publication.privateData
        this.requests = publication.requests
        this.matches = publication.matches
    }
}