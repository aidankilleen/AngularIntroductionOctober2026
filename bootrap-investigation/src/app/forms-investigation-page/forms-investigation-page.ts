import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-forms-investigation-page',
  styleUrl: './forms-investigation-page.css',
  template: `
    <h2>Forms Investigation</h2>

    <form
      (ngSubmit)="submitForm(userForm)"
      #userForm="ngForm"
    >
      Name:
        <input
          name="name"
          [ngModel]="user().name"
          (ngModelChange)="user.update(u => ({...u, name:$event}))"
          #userNameControl="ngModel"
          required
          minlength="3"
        /><br>
      @if (userNameControl.touched &&
          userNameControl.invalid) {

        @if (userNameControl.errors?.['required']) {
          <p class="error">Username is required</p>
        } @else {
          <p class="error">Username has minimum length 3</p>
        }
      }
      Email:
        <input
          type="email"
          name="email"
          [ngModel]="user().email"
          (ngModelChange)="user.update(u=>({...u, email:$event}))"
          #emailControl="ngModel"
          required
          email
        /><br>
        @if (emailControl.touched &&
            emailControl.invalid) {
          @if (emailControl.errors?.['email']) {
            <p class="error">Enter a valid email</p>
          } @else {
            <p class="error">Email is required</p>
          }
        }

      Active:
        <input
          type="checkbox"
          name="active"
          [ngModel]="user().active"
          (ngModelChange)="user.update(u=>({...u, active:$event}))"/>
          <br>

      <input
        type="submit"
        value="Submit"


      />
      <!--[disabled]="userForm.invalid"-->
    </form>
    <hr>
    {{ user() | json }}
  `,
})
export class FormsInvestigationPage {

  // don't use variables for things that will change
  //username = "";
  //email = "";

  // use a signal instead
  user = signal<User>(new User());

  submitForm(form:NgForm) {
    console.log(form);

    if (form.invalid) {
      alert("there are errors")
    } else {
      //alert ("there are no errors");
      alert(JSON.stringify(form.value));
    }
  }
}
