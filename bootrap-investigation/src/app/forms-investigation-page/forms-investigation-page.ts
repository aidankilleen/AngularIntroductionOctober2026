import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-forms-investigation-page',
  styleUrl: './forms-investigation-page.css',
  template: `
    <h2>Forms Investigation</h2>

    <form
      (ngSubmit)="submitForm()"
      #userForm="ngForm"
    >
      Name:
        <input
          name="username"
          [(ngModel)]="username"
          #userNameControl="ngModel"
          required
        /><br>
      @if (userNameControl.touched &&
          userNameControl.invalid) {
        <p class="error">Username is required</p>
      }



      Email:<input/><br>

      <input type="submit" value="Submit"/>
    </form>
    <hr>
    {{ username }}
  `,
})
export class FormsInvestigationPage {

  username = "";

  submitForm() {
    alert(this.username);
  }

}
