import { Document } from "mongoose"

export class PublicationEntity extends Document{
    _id: string
    description: string
    privateData: string
    userCreate: string
    requests: string[]
    matches: string[]
}