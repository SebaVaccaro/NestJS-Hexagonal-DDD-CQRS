export interface NewUserDBI{
    _id: string
    username: string
    email: string
    password: string
    phonenumber: string
    age: string
    gender: string
    
    myPublications: string[]
    myPublicationRequests: string[]
    myPublicationMatches: string[]
    myRequests: string[]
    myMatches:string[]
}