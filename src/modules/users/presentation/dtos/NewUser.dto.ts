import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class NewUserDto{
    @IsString()
    @IsNotEmpty()
    readonly username: string
    @IsString()
    @IsNotEmpty()
    readonly password: string
    @IsEmail()
    @IsNotEmpty()
    readonly email: string
    @IsString()
    @IsNotEmpty()
    readonly phonenumber: string
    @IsString()
    @IsNotEmpty()
    readonly age: string
    @IsString()
    @IsNotEmpty()
    readonly gender: string
}