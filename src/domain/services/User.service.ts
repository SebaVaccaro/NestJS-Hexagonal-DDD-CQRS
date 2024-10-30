import { User } from "../entities/User.entities";
import { UserRepository } from "../repositories/User.repository";

export class UserService{
    constructor( private readonly userRepository: UserRepository){}
    createUser(
        data:{
        username: string,
        email: string,
        password: string
    }): void{
        const newUser = new User(data.username, data.email, data.password)
        return this.userRepository.postUser(newUser)
    }
    getAllUsers(): User[]{
        return this.userRepository.getAllUsers()
    }
}