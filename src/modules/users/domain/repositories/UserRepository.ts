import { User } from "../entities/User.entities";

export interface UserRepository{
    addUser(user: User): User
    deleteUser(id: string): string
    getUsers(): User[]
    getUserById(id:string): User | undefined
    getUserByEmail(email: string): User
}