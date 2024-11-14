import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = HydratedDocument<UserS>

@Schema()
export class UserS{
    @Prop({type: String, required: true})
    _id: string
    @Prop()
    username: string
    @Prop()
    email: string
    @Prop()
    password: string
    @Prop()
    phonenumber: string
    @Prop()
    age: string
    @Prop()
    gender: string
    getPublicData(){
        return {
            username: this.username,
            age: this.age,
            gender: this.gender
        }
    }
    getPrivateData(){
        return{
            email: this.email,
            phonenumber: this.phonenumber
        }
    }
}

export const UserSchema = SchemaFactory.createForClass(UserS)