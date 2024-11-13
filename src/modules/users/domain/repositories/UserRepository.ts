import { User } from "../entities/User.entities";

export interface UserRepository{
    addUser(user: User): Promise<User>
    deleteUser(id: string): Promise<User | null>
    getUsers(): User[]
    getUserById(id:string): Promise<User|null>
    getUserByEmail(email: string):Promise<User|null>
}