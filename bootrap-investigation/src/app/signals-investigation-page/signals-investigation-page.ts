import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals-investigation-page',
  styleUrl: './signals-investigation-page.css',
  template: `
    <h2>Signals Investigation</h2>

    <input
      [value]="firstName()"
      (input)="firstName.set(txtFirstName.value)"
      #txtFirstName
    /><br>
    <input
      [value]="lastName()"
      (input)="lastName.set(txtLastName.value)"
      #txtLastName
    /><br>

    {{ firstName() }} {{ lastName() }}
    <hr>
    <h3>name() is computed</h3>
    <p>it is recalculated any time firstName() or lastName() change</p>
    {{ name() }}
  `,
})
export class SignalsInvestigationPage {

  // name = "Aidan";
  firstName = signal<string>("Alice");
  lastName = signal<string>("Adams");

  // computed() signal
  name = computed(() => {
    return `${this.firstName()} ${this.lastName()}`
  });

}
