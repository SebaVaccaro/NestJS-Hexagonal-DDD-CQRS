import { PublicationDto } from "../publications/presentation/dtos/PublicationDto";
import { AppService } from "../application/app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createPublication(publicationDto: PublicationDto): Promise<import("../publications/domain/entities/Publication").Publication>;
}
