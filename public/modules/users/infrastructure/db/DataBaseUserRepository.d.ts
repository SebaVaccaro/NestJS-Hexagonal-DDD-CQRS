import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model } from "mongoose";
import { UserS } from "./UserSchema";
import { NewUserInterface } from "../../domain/interface/NewUserInterface";
import { User } from "../../domain/entities/User.entities";
export declare class DataBaseUserRepository implements UserRepository {
    private readonly userModel;
    constructor(userModel: Model<UserS>);
    addUser(user: NewUserInterface): Promise<User | null>;
    deleteUser(id: string): Promise<User | null>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}
