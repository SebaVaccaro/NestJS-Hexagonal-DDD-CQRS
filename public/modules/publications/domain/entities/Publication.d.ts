import { Document } from "mongoose";
export declare class Publication extends Document {
    _id: string;
    userCreate: string;
    description: string;
    privateData: string;
    requests: string[];
    matches: string[];
}
