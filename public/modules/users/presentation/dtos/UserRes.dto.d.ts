import { User } from "../../domain/entities/User.entities";
export declare class UserResDto {
    username: string;
    _id: string;
    email: string;
    phonenumber: string;
    age: string;
    gender: string;
    constructor(user: User);
}
