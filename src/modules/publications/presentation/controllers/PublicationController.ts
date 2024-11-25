import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import { PublicationService } from "../../application/PublicationService";
import { PublicationResDto } from "../dtos/PublicationResDto";
import { IdDto } from "../dtos/IdDto";
import { NewPublicationReqDto } from "../dtos/NewPublicationReqDto";

@Controller('publication')
export class PublicationController{
    constructor(private readonly publicationService: PublicationService){}
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Get()
    async getPublications(): Promise<PublicationResDto[] | null>{
        return await this.publicationService.getPublications()
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Get('/:id')
    async getPublicationById(@Param() id: IdDto): Promise<PublicationResDto>{
        return await this.publicationService.getPublicationById(id)
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post('/:id')
    async createPublication(@Param() id: IdDto, @Body() data: NewPublicationReqDto): Promise<PublicationResDto | null>{
        return await this.publicationService.createPublication(id, data)
    }
}