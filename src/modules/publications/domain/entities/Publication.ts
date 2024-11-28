import { PublicDataI } from "src/modules/users/domain/interface/PublicDataI"
import { PublicationI } from "../interfaces/PublicationI"

export class Publication {
    _id: string
    createBy: string
    description: string
    userData: PublicDataI
    requests: string[]
    matches: string[]
    constructor(publication: PublicationI){
        this._id = publication._id
        this.createBy = publication.createBy
        this.description = publication.description
        this.userData = publication.userData
        this.requests = publication.requests
        this.matches = publication.matches
    }
}