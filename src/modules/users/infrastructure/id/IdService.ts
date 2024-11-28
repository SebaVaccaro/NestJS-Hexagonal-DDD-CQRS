import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid"
import { IdServiceI } from "../../domain/interface/IdServiceI";

@Injectable()
export class IdService implements IdServiceI{
    generate(): string{
        return uuidv4()
    }
}