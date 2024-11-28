import { UserDataI } from "./UserDataI"


export interface PublicationI{
    _id: string
    createBy: string
    description: string
    userData: UserDataI
    requests: string[]
    matches: string[]
}