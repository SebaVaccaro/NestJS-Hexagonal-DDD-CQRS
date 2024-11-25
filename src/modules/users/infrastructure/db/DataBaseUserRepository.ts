import { InjectModel } from "@nestjs/mongoose";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model } from "mongoose";
import { UserS } from "./UserSchema";
import { User } from "../../domain/entities/User.entities";
import { NewUserDBI } from "../../domain/interface/NewUserDBI";

export class DataBaseUserRepository implements UserRepository {
    constructor(@InjectModel(UserS.name) private readonly userModel: Model<UserS>) { }

    private userDbToUser(userS: UserS): User{
        const user = new User(userS)
        return user
    }


    async addUser(userReq: NewUserDBI): Promise<User | null> {
        try {
            const userDb = await new this.userModel(userReq).save()
            
            const user = this.userDbToUser(userDb)
            if (!user) return null
            return user
        
        } catch (err) {
            console.log("create user error")
            console.log(err)
        }
    }

    async deleteUser(id: string): Promise<User | null> {
        try {
            const userDb = await this.userModel.findByIdAndDelete(id)
            if (!userDb) return null
            return this.userDbToUser(userDb)
        } catch (err) {
            console.log("delete user error")
            console.log(err)
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            return await this.userModel.find()
        } catch (err) {
            console.log("get users error")
            console.log(err)
        }
    }

    async getUserById(id: string): Promise<User | null> {
        try {
            const userDb = await this.userModel.findById(id)
            if (!userDb) return null
            return this.userDbToUser(userDb)
        } catch (err) {
            console.log('get by id error')
            console.log(err)
        }
    }

    async getUserByEmail(emailUser: string): Promise<User | null> {
        try {
            const userDb = await this.userModel.findOne({ email: emailUser })
            const user = this.userDbToUser(userDb)
            if (!user) return null
            return user
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async userSave(userSave: User): Promise<User | null> {
        const userDb = await this.userModel.findByIdAndUpdate(userSave._id, userSave)
        return this.userDbToUser(userDb)
    }
}