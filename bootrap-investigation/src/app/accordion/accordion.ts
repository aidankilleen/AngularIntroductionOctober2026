import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-accordion',
  styleUrl: './accordion.css',
  template: `
    <h2>Accordion</h2>
    <ng-content/>
  `,
})
export class Accordion {}
