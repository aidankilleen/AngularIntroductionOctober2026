import { Component, input, output } from '@angular/core';
import { User } from '../user';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-users-table',
  styleUrl: './users-table.css',
  template: `
     <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          @for (user of users(); track user.id) {
            <tr>
              <td><a [routerLink]="user.id.toString()">{{ user.id }}</a></td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.active }}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  (click)="onDelete(user.id)"
                >
                  Delete
                </button>
                <button
                  class="btn btn-primary btn-sm"
                  (click)="onEdit(user)"
                >
                  Edit
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
  `,
})
export class UsersTable {

  users = input.required<User[]>();
  delete = output<number>();
  edit = output<User>();

  onDelete(id:number) {
    this.delete.emit(id);
  }
  onEdit(user:User) {
    this.edit.emit(user);
  }
}
