import { Component, input, output, signal } from '@angular/core';
import { AccordionElement } from '../accordion-element';

@Component({
  imports: [],
  selector: 'app-accordion-panel',
  styleUrl: './accordion-panel.css',
  template: `
    <div (click)="onClick()">
      <h2>{{ element().title }}</h2>
      @if(expanded()) {
        <p>{{ element().text }}</p>
      }
    </div>
  `,
})
export class AccordionPanel {

  element = input<AccordionElement>(new AccordionElement("",""));

  //expanded = signal<boolean>(false);
  expanded = input<boolean>(false);

  clicked = output();

  /*
  for very simple event handlers you can put the code inline in the
  html - Use sparinly!!
  */
  onClick() {
    //this.expanded.set(!this.expanded());
    // notify the parent that the click happened
    this.clicked.emit();
  }

}
