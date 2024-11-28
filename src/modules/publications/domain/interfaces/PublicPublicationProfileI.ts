import { UserDataI } from "./UserDataI"

export interface PublicPublicationProfileI{
    _id: string
    createBy: string
    description: string
    userData: UserDataI
}