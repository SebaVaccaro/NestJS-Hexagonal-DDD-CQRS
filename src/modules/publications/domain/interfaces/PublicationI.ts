import { PrivateDataI } from "./PrivateDataI"
import { PublicDataI } from "./PublicDataI"

export interface PublicationI{
    _id: string
    createBy: string
    description: string
    publicData: PublicDataI
    privateData: PrivateDataI
    requests: string[]
    matches: string[]
}