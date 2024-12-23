import { PublicationResDtoI } from "../../domain/interfaces/PublicationResDtoI"
import { UserDataI } from "../../domain/interfaces/UserDataI"

export class PublicationResDto{
    _id: string
    createBy: string
    description: string
    userData: UserDataI
    requests: string[]
    matches: string[]
    constructor(publication: PublicationResDtoI){
        this._id = publication._id
        this.createBy = publication.createBy
        this.description = publication.description
        this.userData = publication.userData
        this.requests = publication.requests
        this.matches = publication.matches
    }
}