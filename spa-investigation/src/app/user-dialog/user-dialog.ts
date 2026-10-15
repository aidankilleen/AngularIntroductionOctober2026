import { Component, input, OnInit, output, signal } from '@angular/core';
import User from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-user-dialog',
  styleUrl: './user-dialog.css',
  template: `
    <div>
      @if (mode() == "add") {
        <h3>Add User</h3>
      } @else {
        <h3>Update User</h3>
      }

      Name:<input
            [value]="editingUser().name"
            (input) = "editingUser.update(
            user => ({...user, name:txtName.value}))"
            #txtName/><br>

      Email:<input
            [value]="editingUser().email"
            (input) = "editingUser.update(
            user => ({...user, email:txtEmail.value}))"
            #txtEmail/><br>

      Active:<input type="checkbox"
            [checked]="editingUser().active"
            (input) = "editingUser.update(
            user => ({...user, active:chkActive.checked}))"
            #chkActive/><br>

      <br>
      <button (click)="onSave()">Save</button>
      <button (click)="onCancel()">Cancel</button>
      <hr>
      {{ editingUser() | json }}<br>
      {{ user() | json}}
    </div>
  `,
})
export class UserDialog implements OnInit {


  user = input.required<User>();
  mode = input<string>("add");
  editingUser = signal<User>(new User(-1, "", "", false));
  cancel = output();
  save = output<User>();
  //update = output<User>();

  ngOnInit() {
    this.editingUser.set(this.user());
  }

  onCancel() {

    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.editingUser());
  }
}
