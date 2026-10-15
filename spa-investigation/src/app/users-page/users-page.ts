import { Component, inject, signal } from '@angular/core';
import User from '../user';
import { JsonPipe } from '@angular/common';
import { UserService } from '../user-service';
import { UserHttpService } from '../user-http-service';
import { Router, RouterLink } from '@angular/router';
import { UserDialog } from '../user-dialog/user-dialog';

@Component({
  imports: [JsonPipe, RouterLink, UserDialog],
  selector: 'app-users-page',
  styleUrl: './users-page.css',
  template: `
    <h2>Users</h2>
    <button (click)="onAdd()">
      Add User
    </button>

    @if(showDialog()) {
      <app-user-dialog
        [mode]="dialogMode()"
        [user]="user()"
        (cancel)="showDialog.set(false)"
        (save)="onSave($event)"
      />
    }
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
            <td><a [routerLink]="user.id.toString()">{{user.id}}</a></td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.active ? "Active" : "Inactive"}}</td>
            <td>
              <button
                (click)="onClick(user.id)"
              >
                Select
              </button>
              <button
                (click)="onDelete(user.id)"
              >
                Delete
              </button>
              <button
                (click)="onUpdate(user)"
              >
                Update
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

  user = signal<User>(new User(-1, "", "", false));
  showDialog = signal<boolean>(false);
  dialogMode = signal<string>("update");
  users = signal<User[]>([]);

  onAdd() {
    this.user.set(new User(-1, "", "", false));
    this.dialogMode.set("add");
    this.showDialog.set(true);
  }

  onUpdate(user: User) {

    this.user.set(user);
    this.dialogMode.set("update");
    this.showDialog.set(true);
  }

  onSave(user: User) {

    if (this.dialogMode() == "add") {
      this.userService.addUser(user)
        .subscribe(
          addedUser => {
            this.users.update(
              users => [...users, addedUser]
            );
            this.showDialog.set(false);
          }
        );
    } else {
      this.userService.updateUser(user)
        .subscribe(
          updatedUser => {

            this.users.update(
              users => users.map(
                user => user.id == updatedUser.id ? updatedUser : user
              ))
            this.showDialog.set(false);
          }
        );
    }
  }

  // angular supports the IOC pattern
  // we don't instantiate a lot of our own objects
  // angular will instantiate objects for us
  // userService = new UserService();
  // userService:UserService;

  router = inject(Router);
  constructor(private userService:UserHttpService) {

    // this.userService = userService;
    //this.users.set(this.userService.getUsers());
    this.userService.getUsers()
      .subscribe(users => this.users.set(users));
  }

  onDelete(id:number) {
    if (confirm(`Delete ${id}?`)) {
      this.userService.deleteUser(id)
        .subscribe(()=>{
          // update the list of users
          // to remove the one that was just deleted

          // signals have an update function that takes an arrow function
          // the arrow function is passed the current value
          // and returns an updated value
          // changes to signals will trigger ui updates
          this.users.update(current => {

            return current.filter(user=>user.id != id);
          });
        });
    }
  }
  onClick(id:number) {
    // programmatically navigate to the /users/:id route
    this.router.navigate(['/users', id]);

    /*
    let user = this.userService.getUser(id)
      .subscribe(user=>alert(JSON.stringify(user)));
      */
    //alert(JSON.stringify(user));
  }
}
