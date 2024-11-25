import { User } from "../../domain/entities/User.entities";

export class UserResDto{
    username: string
    _id: string
    email: string
    phonenumber: string
    age: string
    gender: string
    myPublications: string[]
    myPublicationRequests: string[]
    myPublicationMatches: string[]
    myRequests: string[]
    myMatches:string[]
    constructor(user: User) {
        this.username = user.username
        this._id = user._id
        this.email = user.email
        this.phonenumber = user.phonenumber
        this.age = user.age
        this.gender = user.gender
        this.myPublications = user.myPublications
        this.myPublicationRequests = user.myPublicationRequests
        this.myPublicationMatches = user.myPublicationMatches
        this.myRequests = user.myRequests
        this.myMatches = user.myMatches
    }
}