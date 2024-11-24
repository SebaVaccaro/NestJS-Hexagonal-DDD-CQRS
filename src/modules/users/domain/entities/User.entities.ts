export class User {
    constructor(
        public _id: string,
        public username: string,
        public email: string,
        public password: string,
        public phonenumber: string,
        public age: string,
        public gender: string,
        public myPublications: string[] = [],
        public myPublicationRequests: string[] = [],
        public myPublicationMatches: string[] = [],
        public myRequests: string[] = [],
        public myMatches: string[] = []
    ) {}

    getPublicData() {
        return {
            username: this.username,
            age: this.age,
            gender: this.gender
        };
    }

    getPrivateData() {
        return {
            email: this.email,
            phonenumber: this.phonenumber
        };
    }
}

