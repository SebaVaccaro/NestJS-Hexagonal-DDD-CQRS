import { Body, Controller, Post } from "@nestjs/common";
import { PublicationDto } from "../publications/presentation/dtos/PublicationDto";
import { AppService } from "../application/app.service";

@Controller('user/publication')
export class AppController{
    constructor(
        private readonly appService: AppService
    ){}
    @Post()
    async createPublication(@Body() publicationDto: PublicationDto){
        return await this.appService.createPublication(publicationDto)
    }
}