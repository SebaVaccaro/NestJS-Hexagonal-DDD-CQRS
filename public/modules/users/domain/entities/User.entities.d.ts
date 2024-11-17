import { Document } from "mongoose";
export declare class User extends Document {
    _id: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    age: string;
    gender: string;
    constructor(username: string, email: string, password: string, phonenumber: string, age: string, gender: string);
    getPublicData(): {
        username: string;
        age: string;
        gender: string;
    };
    getPrivateData(): {
        email: string;
        phonenumber: string;
    };
}
