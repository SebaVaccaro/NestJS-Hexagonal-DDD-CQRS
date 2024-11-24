import { InjectModel } from "@nestjs/mongoose";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model } from "mongoose";
import { UserS } from "./UserSchema";
import { NewUserDBI } from "../../domain/interface/NewUserDBI";
import { User } from "../../domain/entities/User.entities";
import { UserI } from "../../domain/interface/UserI";

export class DataBaseUserRepository implements UserRepository{
    constructor(@InjectModel(UserS.name) private readonly userModel: Model<UserS>){}
    
    private userDbToUser({ _id,username, email, password, phonenumber, age, gender}: UserS): User{
        const user = new User(_id, username, email, password, phonenumber, age, gender)
        return user
    }
    
    
    async addUser({
        _id, username, email, password, phonenumber, age, gender
    }: NewUserDBI): Promise<User | null> {
        try{
            const newUser = new this.userModel({_id, username, email, password, phonenumber, age, gender})
            const userSave = await newUser.save()            
            const user = this.userDbToUser(userSave)
            if(!user)return null
            return user
        }catch(err){
            console.log("create user error")
            console.log(err)
        }
    }
    
    async deleteUser(id: string): Promise<User | null> {
        try{
            const userS = await this.userModel.findByIdAndDelete(id)
            if(!userS)return null
            return this.userDbToUser(userS)
        }catch(err){
            console.log("delete user error")
            console.log(err)
        }
    }
    
    async getUsers(): Promise<User[]> {
        try{
            return await this.userModel.find()
        }catch(err){
            console.log("get users error")
            console.log(err)
        }
    }
    
    async getUserById(id: string): Promise<User | null> {
        try{
            const userS = await this.userModel.findById(id)
            if(!userS)return null
        return this.userDbToUser(userS)
        }catch(err){
            console.log('get by id error')
            console.log(err)
        }
    }
    
    async getUserByEmail(emailUser: string): Promise<User | null> {
        try{
            const userDb = await this.userModel.findOne({email: emailUser})
            const user = this.userDbToUser(userDb)
            if(!user)return null
            return user
        }catch(err){
            console.log(err)
            return null
        }
    }

    async userSave(userSave: User): Promise<UserI | null>{
        return await this.userModel.findByIdAndUpdate(userSave._id, userSave)
    }
}