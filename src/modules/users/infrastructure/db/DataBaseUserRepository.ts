import { InjectModel } from "@nestjs/mongoose";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model } from "mongoose";
import { UserS } from "./UserSchema";
import { NewUserInterface } from "../../domain/interface/NewUserInterface";
import { User } from "../../domain/entities/User.entities";

export class DataBaseUserRepository implements UserRepository{
    constructor(@InjectModel(UserS.name) private readonly userModel: Model<UserS>){}
    
    async addUser(user: NewUserInterface): Promise<User | null> {
        const newUser = new this.userModel(user)
        return await newUser.save()
    }
    
    async deleteUser(id: string): Promise<User | null> {
        const res = await this.userModel.findByIdAndDelete(id)
        return res
    }
    
    async getUsers(): Promise<User[]> {
        return await this.userModel.find()
    }
    
    async getUserById(id: string): Promise<User | null> {
        const user = await this.userModel.findById(id)
        return user
    }
    
    async getUserByEmail(email: string): Promise<User | null> {
        try{
            const user = await this.userModel.findOne({email})
            return user
        }catch(err){
            console.log(err)
            return null
        }
    }
}