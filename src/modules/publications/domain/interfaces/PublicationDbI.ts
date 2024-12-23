import { UserDataI } from "./UserDataI"

export interface PublicationDbI{
    _id: string
    createBy: string
    description: string
    userData: UserDataI
    requests: string[]
    matches: string[]
}