import { Document } from "mongoose"

export class User extends Document{
    username: string
    email: string
    password: string
    phonenumber: string
    age: string
    gender: string
    constructor( username: string, email:string, password:string, phonenumber: string, age: string, gender: string){
        super()
        this.username = username
        this.email = email
        this.password = password
        this.phonenumber= phonenumber
        this.age = age
        this.gender = gender
    }
    getPublicData(){
        return {
            username: this.username,
            age: this.age,
            gender: this.gender
        }
    }
    getPrivateData(){
        return{
            email: this.email,
            phonenumber: this.phonenumber
        }
    }
}