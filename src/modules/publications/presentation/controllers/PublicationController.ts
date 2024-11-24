import { Body, Controller, Get, Param, Post} from "@nestjs/common";
import { PublicationService } from "../../application/PublicationService";
import { PublicationResDto } from "../dtos/PublicationResDto";
import { IdI } from "../../domain/interfaces/IdI";
import { NewPublicationI } from "../../domain/interfaces/NewPublicationInterface";

@Controller('publication')
export class PublicationController{
    constructor(private readonly publicationService: PublicationService){}
    @Get()
    async getPublications(): Promise<PublicationResDto[] | null>{
        return await this.publicationService.getPublications()
    }
    @Get('/:id')
    async getPublicationById(@Param() {id}: IdI): Promise<PublicationResDto>{
        return await this.publicationService.getPublicationById({id})
    }
    @Post('/:id')
    async createPublication(@Param() id: IdI, @Body() data: NewPublicationI): Promise<PublicationResDto | null>{
        return await this.publicationService.createPublication(id, data)
    }
}