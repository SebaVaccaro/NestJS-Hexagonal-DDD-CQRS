import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserS {
    @Prop({ type: String, required: true })
    _id: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phonenumber: string;

    @Prop()
    age: string;

    @Prop()
    gender: string;

    @Prop({ type: [String] })
    myPublications: string[];

    @Prop({ type: [String] })
    myPublicationRequests: string[];

    @Prop({ type: [String] })
    myPublicationMatches: string[];

    @Prop({ type: [String] })
    myRequests: string[];

    @Prop({ type: [String] })
    myMatches: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserS);
