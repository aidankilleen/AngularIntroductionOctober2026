import { Component, contentChildren, linkedSignal, signal } from '@angular/core';
import { AccordionPanel } from '../accordion-panel/accordion-panel';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-accordion',
  styleUrl: './accordion.css',
  template: `
    <ng-content/>
  `,
})
export class Accordion {

  panels = contentChildren<AccordionPanel>(AccordionPanel);
  openPanel = linkedSignal<AccordionPanel | null>(() => this.panels()[0] ?? null);

  toggle(panel: AccordionPanel) {
    this.openPanel.update(
      current=>(current === panel ? null : panel));
  }
}
