import { UserRepository } from '../../domain/repositories/UserRepository';
import { HashingService } from '../../domain/services/hashing.service.interface';
import { IIdService } from '../../domain/interface/Id.interface';
import { NewUserInterface } from '../../domain/interface/NewUserInterface';
import { IdInterface } from '../../domain/interface/IdInterface';
import { EmailInterface } from '../../domain/interface/EmailInterface';
import { User } from '../../domain/entities/User.entities';
import { UserResDto } from '../../presentation/dtos/UserRes.dto';
export declare class UserService {
    private readonly userRepository;
    private readonly hashingService;
    private readonly idService;
    constructor(userRepository: UserRepository, hashingService: HashingService, idService: IIdService);
    createUser(data: NewUserInterface): Promise<UserResDto | null>;
    getUsers(): Promise<UserResDto[]>;
    getUserById({ id }: IdInterface): Promise<UserResDto | null>;
    getUserByEmail({ email }: EmailInterface): Promise<User | null>;
    getPublicData({ id }: IdInterface): Promise<{} | null>;
    getPrivateData({ id }: IdInterface): Promise<{} | null>;
}
