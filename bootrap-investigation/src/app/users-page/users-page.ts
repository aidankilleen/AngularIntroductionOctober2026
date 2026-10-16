import { Component, inject, signal } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsersTable } from '../users-table/users-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDialog } from '../user-dialog/user-dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Component({
  imports: [JsonPipe, AsyncPipe, RouterLink, UsersTable],
  selector: 'app-users-page',
  styleUrl: './users-page.css',
  template: `
    <h2>Users</h2>

      <button class="btn btn-success"
        (click)="onAdd()">Add User</button>

      <app-users-table
        [users]="users()"
        (delete)="onDelete($event)"
        (edit)="onEdit($event)"
      />
  `,
})
export class UsersPage {

  userService = inject(UserService);
  users = signal<User[]>([]);

  modalService = inject(NgbModal);

  onEdit(user:User) {
    //alert("editing:" + JSON.stringify(user));
    const modalRef = this.modalService.open(UserDialog);

    // how do I pass the user to the dialog?
    modalRef.componentInstance.editingUser.set(user);

    modalRef.result.then(
      (updatedUser) => {
        //alert(JSON.stringify(updatedUser))

        this.userService.updateUser(updatedUser)
          .subscribe(
            savedUser =>
              this.users.update(
                users => users.map(
                  user => user.id == savedUser.id ? savedUser : user
                )
              )
            );
      },
      () => { }
    );

  }
  onAdd() {
    this.modalService.open(UserDialog)
      .result.then(
        (user) => {

          this.userService.addUser(user)
            .subscribe((addedUser) => {

              this.users.update(users => [...users, addedUser]);
            });
        },
        () => {
          // called if you cancel, press esc or click the background
          alert("dialog dismissed");
        });
  }
  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users.set(users));
  }

  onDelete(id:number) {

    const dlg = this.modalService.open(ConfirmDialog);

    dlg.componentInstance.title.set("Confirm Delete");
    dlg.componentInstance.message.set(`Delete user ${id}?`);

    dlg.result.then(() => {
        this.userService.deleteUser(id)
                .subscribe(
                  () => this.users.update(
                    users => users.filter(
                      user => user.id != id
                    )
                  )
                );
      });
    /*
    if (confirm("Are you sure?")) {

    }
    */
  }
  // templates can process observables directly
  // convention to put a $ at the end of any variable that is an observable
  users$ = this.userService.getUsers();

  /*
  users = signal<User[]>([]);

  // note: recommended to use ngOnInit() for initialisation
  // rather than putting code into the constructor
  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users.set(users));
  }
  */
}
