import { Service } from '@angular/core';
import User from './user';

@Service()
export class UserService {

  users:User[] = [
    new User(1, "Alice", "alice@gmail", true),
    new User(2, "Bob", "bob@gmail", false),
    new User(3, "Carol", "carol@gmail", true),
    new User(4, "Dan", "dan@gmail", false),
  ];

  getUsers():User[] {
    return this.users;
  }


  getUser(id:number):User | undefined {
    return this.users.find(user => user.id == id);
  }

}
