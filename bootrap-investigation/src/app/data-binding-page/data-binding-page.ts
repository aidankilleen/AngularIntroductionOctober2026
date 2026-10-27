import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding-page',
  styleUrl: './data-binding-page.css',
  template: `
    <h2>Data Binding</h2>

    <!--
    <input
      [value]="name()"
      (input)="name.set(txtName.value)"
      #txtName
    />
    -->
    <input [(ngModel)]="name"/>

    {{ name }}

    <button
      (click)="name=''"
    >
      Reset
    </button>
    <hr>
    <input
      [ngModel]="nameSignal()"
      (ngModelChange)="nameSignal.set($event)"
    /> {{ nameSignal() }}
    <button
      (click)="nameSignal.set('')"
    >
      Reset
    </button>









  `,
})
export class DataBindingPage {

  // don't use variables for anything that might change
  name = "Aidan"

  // use a signal instead
  nameSignal = signal<string>("Aidan");


}
