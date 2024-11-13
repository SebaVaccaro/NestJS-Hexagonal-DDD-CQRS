import { HydratedDocument } from "mongoose";
import { User } from "../../domain/entities/User.entities";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CatDocument = HydratedDocument<User>

@Schema()
export class UserS{
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
}

export const UserSchema = SchemaFactory.createForClass(UserS)