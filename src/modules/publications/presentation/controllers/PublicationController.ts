import { Controller, Get} from "@nestjs/common";
import { PublicationService } from "../../application/PublicationService";
import { PublicationS } from "../../infrastructure/db/PublicationSchema";

@Controller('publication')
export class PublicationController{
    constructor(private readonly publicationService: PublicationService){}
    @Get()
    async getPublications(): Promise<PublicationS[] | null>{
        return this.publicationService.getPublications()
    }
}