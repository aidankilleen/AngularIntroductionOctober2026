import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from '../user-http-service';
import User from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-user-detail-page',
  styleUrl: './user-detail-page.css',
  template: `
    <h2>User Detail {{ userId }}</h2>


    <table>
      <tr>
        <td>ID</td><td>{{ user().id }}</td>
      </tr>
      <tr>
        <td>Name</td><td>{{ user().name }}</td>
      </tr>
      <tr>
        <td>Email</td><td>{{ user().email }}</td>
      </tr>
      <tr>
        <td>Active</td><td>{{ user().active ? "Active" : "Inactive" }}</td>
      </tr>
    </table>
    <!--<hr>
    {{ user() | json }}-->
  `,
})
export class UserDetailPage {

  activatedRoute = inject(ActivatedRoute);
  userId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  userService = inject(UserHttpService);

  // if user is a variable the ui might not get updated when it changes
  //user:User = new User(-1, "", "", false);
  // if your varialbe is likely to change then make it a signal
  user = signal<User>(new User(-1, "", "", false));

  constructor() {
    console.log(this.activatedRoute);
    this.userService.getUser(this.userId)
      .subscribe(user => {
        this.user.set(user);
        console.log(user);
      });
  }

}
