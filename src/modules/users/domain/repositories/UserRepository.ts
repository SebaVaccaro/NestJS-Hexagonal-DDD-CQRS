import { UserS } from "../../infrastructure/db/UserSchema";

export interface UserRepository{
    addUser(user: {
        _id: string;
        username: string;
        email: string;
        password: string;
        phonenumber: string;
        age: string;
        gender: string;
      }): Promise<UserS | null>
    deleteUser(id: string): Promise<UserS | null>
    getUsers(): Promise<UserS[]>
    getUserById(id:string): Promise<UserS|null>
    getUserByEmail(email: string):Promise<UserS|null>
}