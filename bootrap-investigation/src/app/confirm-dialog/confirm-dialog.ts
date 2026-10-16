import { Component, inject, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-confirm-dialog',
  styleUrl: './confirm-dialog.css',
  template: `
    <div class="modal-header">{{ title() }}</div>
    <div class="modal-body">{{ message() }}</div>
    <div class="modal-footer">
      <button
      class="btn btn-primary"
        (click)="activeModal.close()"
      >
      Ok
      </button>
      <button
        class="btn btn-secondary"
        (click)="activeModal.dismiss()"
      >
      Cancel
      </button>
    </div>
  `
})
export class ConfirmDialog {

  title = signal<string>("Confirm")
  message = signal<string>("Are you sure?");
  activeModal = inject(NgbActiveModal);

}
