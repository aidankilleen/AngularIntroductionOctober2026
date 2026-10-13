import { Component, input, signal } from '@angular/core';
import { AccordionElement } from '../accordion-element';
import { JsonPipe } from '@angular/common';
import { AccordionPanel } from '../accordion-panel/accordion-panel';


/*
10.37 - 10.47

Exercise: make the expanded panel have a different colour
for the heading

make the colours properties of the accordion

<app-accordion
  [elements]="someElements"
  [colour]="lightblue"
  [expandedColour]="lightgreen"/>



*/


@Component({
  imports: [JsonPipe, AccordionPanel],
  selector: 'app-accordion',
  styleUrl: './accordion.css',
  template: `
    <div>

      @for(element of elements(); track $index; let i=$index) {

        <app-accordion-panel
          [element]="element"
          [expanded]="expandedPanelIndex() == i"
          (clicked)="onClicked(i)"
          [colour]="colour()"
          [expandedColour]="expandedColour()"
          />
      }
    </div>

  `,
})
export class Accordion {

  expandedPanelIndex = signal<number>(0);

  elements = input<AccordionElement[]>();
  colour = input<string>("lightgreen");
  expandedColour = input<string>("lightcoral");

  onClicked(index:number) {
    //alert(`a panel ${index} was clicked`);

    if (this.expandedPanelIndex() == index) {
      this.expandedPanelIndex.set(-1);
    } else {
      this.expandedPanelIndex.set(index);

    }
  }
}
