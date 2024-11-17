import { Document } from "mongoose"

export class Publication extends Document{
    _id: string
    userCreate: string
    description: string
    privateData: string
    requests: string[]
    matches: string[]
}