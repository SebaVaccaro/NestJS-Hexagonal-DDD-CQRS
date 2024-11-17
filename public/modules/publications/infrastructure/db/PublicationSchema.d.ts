import { HydratedDocument } from "mongoose";
export type PublicationDocument = HydratedDocument<PublicationS>;
export declare class PublicationS {
    _id: string;
    description: string;
    privateData: string;
    userCreate: string;
    requests: string[];
    matches: string[];
}
export declare const PublicationSchema: import("mongoose").Schema<PublicationS, import("mongoose").Model<PublicationS, any, any, any, import("mongoose").Document<unknown, any, PublicationS> & PublicationS & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PublicationS, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PublicationS>> & import("mongoose").FlatRecord<PublicationS> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
