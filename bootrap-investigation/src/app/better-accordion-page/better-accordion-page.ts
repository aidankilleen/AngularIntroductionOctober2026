import { Component } from '@angular/core';
import { Accordion } from '../accordion/accordion';
import { AccordionPanel } from '../accordion-panel/accordion-panel';

@Component({
  imports: [Accordion, AccordionPanel],
  selector: 'app-better-accordion-page',
  styleUrl: './better-accordion-page.css',
  template: `
    <h2>Better Accordion</h2>

    <app-accordion>
      <app-accordion-panel heading="Panel 1">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </app-accordion-panel>

      <app-accordion-panel heading="Panel 2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta porro ullam cumque officia perferendis suscipit pariatur aliquid quibusdam accusamus. Accusantium aut dignissimos quasi eveniet unde sit nulla error repudiandae!</p>
      </app-accordion-panel>

      <app-accordion-panel heading="Panel 3">
        <img src="https://picsum.photos/200/300"/>
      </app-accordion-panel>

    </app-accordion>

    <br>
    <hr>
    <br>

    <app-accordion>
      <app-accordion-panel heading="Panel 1">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </app-accordion-panel>

      <app-accordion-panel heading="Panel 2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta porro ullam cumque officia perferendis suscipit pariatur aliquid quibusdam accusamus. Accusantium aut dignissimos quasi eveniet unde sit nulla error repudiandae!</p>
      </app-accordion-panel>

      <app-accordion-panel heading="Panel 3">
        <img src="https://picsum.photos/200/300"/>
      </app-accordion-panel>

    </app-accordion>

  `,
})
export class BetterAccordionPage {}
