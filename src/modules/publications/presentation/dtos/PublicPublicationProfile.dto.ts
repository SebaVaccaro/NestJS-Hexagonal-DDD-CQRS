import { PublicPublicationProfileI } from "../../domain/interfaces/PublicPublicationProfileI"
import { UserDataI } from "../../domain/interfaces/UserDataI"

export class PublicPublicationProfileResDto{
    _id: string
    createBy: string
    description: string
    userData: UserDataI
    constructor(publication: PublicPublicationProfileI){
        this._id = publication._id
        this.createBy = publication.createBy
        this.description = publication.description
        this.userData = publication.userData
    }
}