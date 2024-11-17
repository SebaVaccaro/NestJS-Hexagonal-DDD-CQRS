import { User } from "../entities/User.entities";
import { NewUserInterface } from "../interface/NewUserInterface";
export interface UserRepository {
    addUser(user: NewUserInterface): Promise<User | null>;
    deleteUser(id: string): Promise<User | null>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}
