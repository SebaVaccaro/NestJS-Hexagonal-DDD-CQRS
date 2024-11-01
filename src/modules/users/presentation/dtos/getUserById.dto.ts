import { IsNotEmpty, IsString } from "class-validator";

export class GetUserByIdDto{
    @IsString()
    @IsNotEmpty()
    readonly userId: string
}