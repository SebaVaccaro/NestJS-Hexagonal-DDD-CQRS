export class User{
    userId: string
    username: string
    email: string
    password: string
    constructor(userId:string, username: string, email:string, password:string){
        this.userId = userId
        this.username = username
        this.email = email
        this.password = password
    }
}