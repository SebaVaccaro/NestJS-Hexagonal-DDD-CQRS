import { Injectable } from "@nestjs/common";
import { IIdService } from "../../domain/interface/Id.interface";
import { v4 as uuidv4 } from "uuid"

@Injectable()
export class IdService implements IIdService{
    generate(): string{
        return uuidv4()
    }
}