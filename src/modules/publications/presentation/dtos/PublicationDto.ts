import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class PublicationDto{
        
        @IsString()
        @IsNotEmpty()
        readonly description: string;
        
        @IsString()
        @IsNotEmpty()
        readonly privateData: string;
        
        @IsString()
        @IsNotEmpty()
        readonly userCreate: string;
        
        @IsArray()
        @IsString({each: true})
        readonly requests: string[];
        
        @IsArray()
        @IsString({each: true})
        readonly matches: string[];
}