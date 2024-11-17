import { HashingService } from "../../domain/services/hashing.service.interface";
export declare class BcryptHashingService implements HashingService {
    hash(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}
