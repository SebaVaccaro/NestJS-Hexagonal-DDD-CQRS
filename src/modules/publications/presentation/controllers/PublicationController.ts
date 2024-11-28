import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import { PublicationService } from "../../application/PublicationService";
import { PublicationResDto } from "../dtos/PublicationResDto";
import { IdDto } from "../dtos/IdDto";
import { NewPublicationReqDto } from "../dtos/NewPublicationReqDto";
import { PublicPublicationProfileResDto } from "../dtos/PublicPublicationProfile.dto";
import { PublicationReqDto } from "../dtos/PublicationReq.dto";

@Controller('publication')
export class PublicationController{
    constructor(private readonly publicationService: PublicationService){}
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Get()
    async getAll(): Promise<PublicationResDto[] | null>{
        return await this.publicationService.getAll()
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Get('/private/:id')
    async getById(@Param() id: IdDto): Promise<PublicationResDto>{
        return await this.publicationService.getById(id)
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post('/:id')
    async create(@Param() id: IdDto, @Body() data: NewPublicationReqDto): Promise<PublicationResDto | null>{
        return await this.publicationService.create(id, data)
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Get('/:id')
    async getPublicProfile(@Param() id: IdDto): Promise<PublicPublicationProfileResDto | null>{
        return await this.publicationService.getPublicProfile(id)
    }

    @Delete('/:id')
    @UsePipes( new ValidationPipe({whitelist: true}))
    async delete(@Param() id:IdDto): Promise<PublicationResDto | null>{
        return await this.publicationService.delete(id)
    }

    @Put('/:id')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async update(@Param() id:IdDto, @Body() data: PublicationReqDto): Promise<PublicationResDto | null>{
        return await  this.publicationService.update(id, data)
    }
}