import { Component, inject, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-user-dialog',
  styleUrl: './user-dialog.css',
  template: `
    <div class="modal-header">
      <h4>User Dialog</h4>
    </div>
    <div class="modal-body">

      <div class="mb-3">
      <label class="form-label">Name</label>
      <input
        class="form-control"
        [value]="editingUser().name"
        (input)="editingUser.update(
          user => ({...user, name: txtName.value}))"
        #txtName
        >
      </div>

      <div class="mb-3">
      <label class="form-label">Email</label>
      <input
        class="form-control"
        [value]="editingUser().email"
        (input)="editingUser.update(
          user => ({...user, email: txtEmail.value}))"
        #txtEmail
        >
      </div>

      <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        [checked]="editingUser().active"
        (input)="editingUser.update(
          user => ({...user, active: chkActive.checked}))"
        #chkActive>
      <label class="form-check-label" for="checkDefault">
        Active
      </label>
    </div>

      <hr>
        {{ editingUser() | json }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary"
        (click)="onSave()"
      >
        Save
      </button>
      <button class="btn btn-secondary"
        (click)="onCancel()"
      >
        Cancel
      </button>
    </div>
  `,
})
export class UserDialog {

  activeModal = inject(NgbActiveModal);

  editingUser = signal<User>(new User());

  onCancel() {
    this.activeModal.dismiss();
  }
  onSave() {
    this.activeModal.close(
      this.editingUser()
    );
  }
}
