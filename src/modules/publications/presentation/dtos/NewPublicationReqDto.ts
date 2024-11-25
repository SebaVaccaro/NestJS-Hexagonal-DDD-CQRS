import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class NewPublicationReqDto{
    @IsString()
    @IsNotEmpty()
    readonly description: string;
}