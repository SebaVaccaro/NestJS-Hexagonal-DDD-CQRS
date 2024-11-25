import { PrivateDataI } from "../../domain/interfaces/PrivateDataI"
import { PublicationResDtoI } from "../../domain/interfaces/PublicationResDtoI"
import { PublicDataI } from "../../domain/interfaces/PublicDataI"

export class PublicationResDto{
    _id: string
    createBy: string
    description: string
    publicData: PublicDataI
    privateData: PrivateDataI
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