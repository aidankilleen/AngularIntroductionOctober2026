import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-accordion-panel',
  styleUrl: './accordion-panel.css',
  template: `
    <div>
      <h3>Accordion Panel</h3>
      <ng-content/>
    </div>
  `,
})
export class AccordionPanel {}
