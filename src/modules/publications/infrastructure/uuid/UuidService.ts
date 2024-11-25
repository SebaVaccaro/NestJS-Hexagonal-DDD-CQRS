import { v4 as uuidv4} from "uuid"
import { IdServiceI } from "../../domain/reposotorys/IdServiceI"
export class UuidService implements IdServiceI{
    generate(): string{
        return uuidv4()
    }
}