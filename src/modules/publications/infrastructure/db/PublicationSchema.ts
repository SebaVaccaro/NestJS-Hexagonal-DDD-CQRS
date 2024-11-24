import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";
export type PublicationDocument = HydratedDocument<PublicationS>   
    
@Schema()
export class PublicationS{
    @Prop({type:String})
    _id: string
    
    @Prop({type:String})
    createBy: string
    
    @Prop({type:String})
    description: string

    @Prop({type: [String]})
    publicData: string[]
    
    @Prop({type:[String]})
    privateData: string[]
    
    @Prop({ type: [String], required: true })
    requests: string[]
    
    @Prop({ type: [String], required: true })
    matches: string[]
}
export const PublicationSchema = SchemaFactory.createForClass(PublicationS)