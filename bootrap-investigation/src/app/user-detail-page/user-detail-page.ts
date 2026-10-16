import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-user-detail-page',
  styleUrl: './user-detail-page.css',
  template: `
    <h2>User Detail {{ userId }}</h2>


    @if(user$ | async; as user) {

      <table class="table">
        <tr>
          <td>Id</td><td>{{ user.id }}</td>
        </tr>
        <tr>
          <td>Name</td><td>{{ user.name }}</td>
        </tr>
        <tr>
          <td>Email</td><td>{{ user.email }}</td>
        </tr>
        <tr>
          <td>Active</td><td>{{ user.active ? "Active" : "Inactive" }}</td>
        </tr>
      </table>
    }

  `,
})
export class UserDetailPage {

  activatedRoute = inject(ActivatedRoute);
  userId = Number(this.activatedRoute.snapshot.paramMap.get("id"));

  userService = inject(UserService);
  user$ = this.userService.getUser(this.userId);

}
