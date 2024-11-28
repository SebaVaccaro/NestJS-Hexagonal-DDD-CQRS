import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";
import { UserDataI } from "../../domain/interfaces/UserDataI";
export type PublicationDocument = HydratedDocument<PublicationS>   
    
@Schema()
export class PublicationS{
    @Prop({type:String})
    _id: string
    
    @Prop({type:String})
    createBy: string
    
    @Prop({type:String})
    description: string

    @Prop({type:Object})
    userData: UserDataI
    
    @Prop({ type: [String], required: true })
    requests: string[]
    
    @Prop({ type: [String], required: true })
    matches: string[]
}
export const PublicationSchema = SchemaFactory.createForClass(PublicationS)