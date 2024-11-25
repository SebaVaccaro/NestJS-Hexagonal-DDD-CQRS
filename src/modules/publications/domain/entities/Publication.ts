import { PrivateDataI } from "../interfaces/PrivateDataI"
import { PublicationI } from "../interfaces/PublicationI"
import { PublicDataI } from "../interfaces/PublicDataI"

export class Publication {
    _id: string
    createBy: string
    description: string
    publicData: PublicDataI
    privateData: PrivateDataI
    requests: string[]
    matches: string[]
    constructor(publication: PublicationI){
        this._id = publication._id
        this.createBy = publication.createBy
        this.description = publication.description
        this.publicData = publication.publicData
        this.privateData = publication.privateData
        this.requests = publication.requests
        this.matches = publication.matches
    }
}