import { UserService } from '../../application/services/User.service';
import { UserDto } from '../dtos/User.dto';
import { UserIdDto } from '../dtos/UserId.dto';
import { UserResDto } from '../dtos/UserRes.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    userRegister(userData: UserDto): Promise<UserResDto>;
    getPublicData(id: UserIdDto): Promise<{}>;
    getPrivateData(id: UserIdDto): Promise<{}>;
    getUsers(): Promise<UserResDto[]>;
    getUserById(id: UserIdDto): Promise<UserResDto>;
}
