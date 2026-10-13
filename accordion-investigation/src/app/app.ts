import { Component, signal } from '@angular/core';
import { Accordion } from './accordion/accordion';
import { TitleCasePipe } from '@angular/common';
import { AccordionElement } from './accordion-element';


@Component({
  imports: [Accordion, TitleCasePipe],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <h1>{{ title() | titlecase }}</h1>

    <!-- no need for a single root tag -->
    <!-- self-closing of custom tags works -->

    <app-accordion
      [elements]="accordionElements"/>

<hr>
    <app-accordion
      [elements]="newsElements"/>
  `,
})
export class App {
  protected readonly title = signal('accordion investigation');

    accordionElements = [
      new AccordionElement("Item 1","This is item 1"),
      new AccordionElement("Item 2","This is item 2"),
      new AccordionElement("Item 3","This is item 3"),
      new AccordionElement("Item 4","This is item 4"),
    ];

    newsElements = [
      new AccordionElement("News Item 1","This is news item 1"),
      new AccordionElement("News Item 2","This is news item 2"),
      new AccordionElement("News Item 3","This is news item 3"),
      new AccordionElement("News Item 4","This is news item 4"),
    ];


}
