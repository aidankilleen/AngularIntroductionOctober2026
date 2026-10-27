import { Component } from '@angular/core';
import { Wrapper } from '../wrapper/wrapper';

@Component({
  imports: [Wrapper],
  selector: 'app-wrapper-investigation-page',
  styleUrl: './wrapper-investigation-page.css',
  template: `
    <h2>Wrapper Components</h2>

    <app-wrapper>
      <h2>Wrapped Html</h2>
      <p>What happens to the html wrapped by my component?</p>
    </app-wrapper>
  `,
})
export class WrapperInvestigationPage {}
