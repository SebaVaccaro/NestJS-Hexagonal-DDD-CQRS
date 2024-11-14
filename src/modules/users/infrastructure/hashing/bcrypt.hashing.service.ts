import { HashingService } from "../../domain/services/hashing.service.interface";
import * as bcrypt from 'bcrypt'

export class BcryptHashingService implements HashingService {
    async hash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        return hash
    }
    async compare(password: string, hash: string): Promise<boolean> {
        const match = await bcrypt.compare(password, hash)
        return match
    }
}