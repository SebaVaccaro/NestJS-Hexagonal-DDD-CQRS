import { User } from "../../domain/entities/user.entities";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class InMemoryUserRepository implements UserRepository{
    Users : User[] = []
    addUser(user: User): string {
        this.Users.push(user)
        return "user create succesfull"
    }
    deleteUser(id: string): string {
        const newUsers = this.Users.filter(u=> u.userId !== id)
        this.Users = newUsers
        return "delete user succesfull"
    }
    getUsers(): User[] {
        return this.Users
    }
    getUserById(id: string): User | undefined {
        const user = this.Users.find(u=> u.userId === id)
        return user
    }

}