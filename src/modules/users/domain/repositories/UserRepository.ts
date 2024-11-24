import { User } from "../entities/User.entities";
import { NewUserDBI } from "../interface/NewUserDBI";
import { UserI } from "../interface/UserI";

export interface UserRepository{
    addUser(user: NewUserDBI): Promise<User | null>
    deleteUser(id: string): Promise<User | null>
    getUsers(): Promise<User[]>
    getUserById(id:string): Promise<User|null>
    getUserByEmail(email: string):Promise<User|null>
    userSave(userSave: User): Promise<UserI | null>
}