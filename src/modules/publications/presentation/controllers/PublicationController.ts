import { Controller, Get, Param} from "@nestjs/common";
import { PublicationService } from "../../application/PublicationService";
import { PublicationResDto } from "../dtos/PublicationResDto";
import { IdI } from "../../domain/interfaces/IdI";

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
}