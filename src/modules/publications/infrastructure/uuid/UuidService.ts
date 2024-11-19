
import { v4 as uuidv4} from "uuid"
import { IdService } from "../../domain/interfaces/IdServiceI"
export class UuidService implements IdService{
    generate(): string{
        return uuidv4()
    }
}