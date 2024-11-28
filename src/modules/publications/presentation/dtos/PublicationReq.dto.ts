import { IsArray, IsNotEmpty, IsObject, IsString, IsUUID } from "class-validator"
import { UserDataI } from "../../domain/interfaces/UserDataI"
export class PublicationReqDto{
    @IsUUID()
    @IsNotEmpty()
    _id: string
    @IsUUID()
    @IsNotEmpty()
    createBy: string
    @IsString()
    @IsNotEmpty()
    description: string
    @IsObject()
    @IsNotEmpty()
    userData: UserDataI 
    @IsArray()
    @IsNotEmpty()
    requests: string[]
    @IsArray()
    @IsNotEmpty()
    matches: string[]
}