import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PublicationService } from "../../application/PublicationService";
import { PublicationDto } from "../dtos/PublicationDto";
import { PublicationS } from "../../infrastructure/db/PublicationSchema";

@Controller('publication')
export class PublicationController{
    constructor(private readonly publicationService: PublicationService){}
    
    @Post('create')
    @UsePipes(new ValidationPipe({whitelist:true}))
    async createPublication(@Body() publicationDto: PublicationDto): Promise<PublicationS | null>{
        return await this.publicationService.createPublication(publicationDto)
    }
    
    @Get()
    async getPublications(): Promise<PublicationS[] | null>{
        return this.publicationService.getPublications()
    }
}