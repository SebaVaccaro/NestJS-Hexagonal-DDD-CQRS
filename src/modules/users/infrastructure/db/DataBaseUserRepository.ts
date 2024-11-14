import { InjectModel } from "@nestjs/mongoose";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model } from "mongoose";
import { UserS } from "./UserSchema";

export class DataBaseUserRepository implements UserRepository{
    constructor(@InjectModel(UserS.name) private readonly userModel: Model<UserS>){}
    async addUser(user: {
            _id:string
            username:string,
            email: string,
            password: string,
            phonenumber: string,
            age: string,
            gender: string
    }): Promise<UserS | null> {
        const newUser = new this.userModel(user)
        return await newUser.save()
    }
    async deleteUser(id: string): Promise<UserS | null> {
        const res = await this.userModel.findByIdAndDelete(id)
        return res
    }
    async getUsers(): Promise<UserS[]> {
        return await this.userModel.find()
    }
    async getUserById(id: string): Promise<UserS | null> {
        const user = await this.userModel.findById(id)
        return user
    }
    async getUserByEmail(email: string): Promise<UserS | null> {
        try{
            const user = await this.userModel.findOne({email})
            return user
        }catch(err){
            console.log(err)
            return null
        }
    }
}