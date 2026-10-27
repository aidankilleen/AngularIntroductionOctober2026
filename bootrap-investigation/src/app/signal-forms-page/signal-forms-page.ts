import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-signal-forms-page',
  styleUrl: './signal-forms-page.css',
  templateUrl: './signal-forms-page.html',
})
export class SignalFormsPage {

  user = signal<User>(new User());

  userForm = form(this.user, (path) => {

    required(path.name, {message: 'Name is required' });
    minLength(path.name, 3, {message: 'Name must be 3 characters long' });
    required(path.email, {message: 'Email is required' });
    email(path.email, {message: 'Enter a valid email' });

  })

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(event);

    if (this.userForm().invalid()) {
      alert("invalid form");
    } else {
      alert(JSON.stringify(this.user()));
    }
  }

}
