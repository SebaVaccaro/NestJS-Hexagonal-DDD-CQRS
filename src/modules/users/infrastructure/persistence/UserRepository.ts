import { User } from "../../domain/entities/user.entities";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { GetUserByEmailDto } from "../../presentation/dtos/getUserByEmail.dto";
import { GetUserByIdDto } from "../../presentation/dtos/getUserById.dto";

export class InMemoryUserRepository implements UserRepository{
    Users : User[] = []
    addUser(user: User): User {
        this.Users.push(user)
        return user
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
    getUserByEmail(email: string): User {
        const user = this.Users.find(u=> u.email === email)
        return user
    }
}