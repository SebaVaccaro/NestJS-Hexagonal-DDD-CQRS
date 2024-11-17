import { User } from "../../domain/entities/User.entities";

export class UserResDto{
    username: string
    _id: string
    email: string
    phonenumber: string
    age: string
    gender: string
    constructor(user: User) {
        this.username = user.username
        this._id = user._id
        this.email = user.email
        this.phonenumber = user.phonenumber
        this.age = user.age
        this.gender = user.gender
    }
}