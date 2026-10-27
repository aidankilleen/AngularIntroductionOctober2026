import { Component, computed, inject, input, signal } from '@angular/core';
import { Accordion } from '../accordion/accordion';

@Component({
  imports: [],
  selector: 'app-accordion-panel',
  styleUrl: './accordion-panel.css',
  template: `
    <div>
      <div class="header"
        (click)="accordion.toggle(this)"
      >
        {{ heading() }}

        <span>{{ isOpen() ? '-' : '+' }}</span>
      </div>
      @if (isOpen()) {
        <ng-content/>
      }
    </div>
  `,
})
export class AccordionPanel {
  // isOpen = signal<boolean>(true);
  isOpen = computed(
    () => this.accordion.openPanel() === this
  );
  heading = input.required<string>();

  protected accordion = inject(Accordion);


}
