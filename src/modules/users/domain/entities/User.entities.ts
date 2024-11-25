import { UserI } from "../interface/UserI";

export class User {
    _id: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    age: string;
    gender: string;
    myPublications: string[];
    myPublicationRequests: string[];
    myPublicationMatches: string[];
    myRequests: string[];
    myMatches: string[];

    constructor(user: UserI) {
        this._id = user._id;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.phonenumber = user.phonenumber;
        this.age = user.age;
        this.gender = user.gender;
        this.myPublications = user.myPublications;
        this.myPublicationRequests = user.myPublicationRequests;
        this.myPublicationMatches = user.myPublicationMatches;
        this.myRequests = user.myRequests;
        this.myMatches = user.myMatches;
    }

    getPublicData = () => {
        return {
            username: this.username,
            age: this.age,
            gender: this.gender
        };
    }

    getPrivateData = () => {
        return {
            email: this.email,
            phonenumber: this.phonenumber
        };
    }
}
