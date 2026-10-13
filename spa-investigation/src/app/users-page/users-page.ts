import { Component, signal } from '@angular/core';
import User from '../user';
import { JsonPipe } from '@angular/common';
import { UserService } from '../user-service';

@Component({
  imports: [JsonPipe],
  selector: 'app-users-page',
  styleUrl: './users-page.css',
  template: `
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        @for(user of users(); track user.id) {
          <tr>
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.active ? "Active" : "Inactive"}}</td>
            <td>
              <button
                (click)="onClick(user.id)"
              >
                Select
              </button>
            </td>
          </tr>
        }
      </tbody>
    </table>

    <hr>
    {{ users() | json }}
  `,
})
export class UsersPage {

  users = signal<User[]>([]);
  // angular supports the IOC pattern
  // we don't instantiate a lot of our own objects
  // angular will instantiate objects for us
  // userService = new UserService();
  // userService:UserService;

  constructor(private userService:UserService) {

    // this.userService = userService;
    this.users.set(this.userService.getUsers());
  }

  onClick(id:number) {

    let user = this.userService.getUser(id);
    console.log(user);
  }

}
