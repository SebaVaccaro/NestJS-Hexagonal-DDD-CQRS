export interface PublicationI{
    _id: string,
    createBy: string,
    description: string,
    publicData: string[],
    privateData: string[],
    requests: string[],
    matches: string[]
}