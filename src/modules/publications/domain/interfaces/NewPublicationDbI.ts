export interface NewPublicationDbI{
    readonly createBy: string
    readonly description: string;
    readonly privateData: string[];
    readonly publicData: string[];
    readonly requests: string[];
    readonly matches: string[];
}