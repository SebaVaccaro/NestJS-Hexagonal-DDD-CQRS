import { HydratedDocument } from "mongoose";
export type UserDocument = HydratedDocument<UserS>;
export declare class UserS {
    _id: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    age: string;
    gender: string;
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
export declare const UserSchema: import("mongoose").Schema<UserS, import("mongoose").Model<UserS, any, any, any, import("mongoose").Document<unknown, any, UserS> & UserS & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserS, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserS>> & import("mongoose").FlatRecord<UserS> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
