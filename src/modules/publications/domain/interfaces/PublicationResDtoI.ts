import { UserDataI } from "./UserDataI"

export interface PublicationResDtoI{
    _id: string
    createBy: string
    description: string
    userData: UserDataI
    requests: string[]
    matches: string[]
}