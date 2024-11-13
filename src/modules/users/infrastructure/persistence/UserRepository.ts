import { InjectModel } from "@nestjs/mongoose";
import { User } from "../../domain/entities/user.entities";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model } from "mongoose";

export class InMemoryUserRepository implements UserRepository{
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    Users : User[] = []
    async addUser(user: User): Promise<User | null> {
        const newUser = new this.userModel(user)
        return await newUser.save()
    }
    async deleteUser(id: string): Promise<User | null> {
        const res = await this.userModel.findByIdAndDelete(id)
        return res
    }
    getUsers(): User[] {
        return this.Users
    }
    async getUserById(id: string): Promise<User | null> {
        const user = await this.userModel.findById(id)
        return user
    }
    async getUserByEmail(email: string): Promise<User | null> {
        const user = await this.userModel.findOne({email})
        return user
    }
}