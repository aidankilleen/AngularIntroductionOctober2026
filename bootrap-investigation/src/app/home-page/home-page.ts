import { Component } from '@angular/core';
import { NgbAccordionDirective, NgbAccordionHeader, NgbAccordionCollapse, NgbAccordionButton, NgbAccordionItem, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [NgbAccordionDirective,
            NgbAccordionHeader,
            NgbAccordionCollapse,
            NgbAccordionButton,
            NgbAccordionItem,
            NgbAccordionBody],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  template: `
    <h2>Home Page</h2>


    <div ngbAccordion [closeOthers]="true">
      @for (item of items; track item) {
      <div ngbAccordionItem [collapsed]="item !== 'First'">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>{{ item }}</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid nemo quisquam blanditiis corporis sed enim, ipsam accusantium consequatur? Porro saepe quo quod ad beatae ab tempore, perspiciatis illo iste?
            </ng-template>
          </div>
        </div>
      </div>
      }
    </div>

  `,
})
export class HomePage {

  items = ['First', 'Second', 'Third'];
}
