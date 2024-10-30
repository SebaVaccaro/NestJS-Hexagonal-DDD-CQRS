import { User } from "../entities/User.entities";

export interface UserRepository{
    getByIdUser(id: string): User
    postUser(user: User): void
    putUser(user: User): void
    getAllUsers(): User[]
}