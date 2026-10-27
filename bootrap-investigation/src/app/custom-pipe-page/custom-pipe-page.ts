import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SummaryPipe } from '../summary-pipe';

@Component({
  imports: [CurrencyPipe, DatePipe, SummaryPipe],
  selector: 'app-custom-pipe-page',
  styleUrl: './custom-pipe-page.css',
  template: `
    <h2>Custom Pipe</h2>

    {{ price | currency: 'EUR' }}<br>

    {{ dt | date }} <br>

    <input
      type="range"
      [value]="length()"
      (input)="length.set(rngLength.valueAsNumber)"
      [max]="text.length"
      #rngLength
    />{{ length() }}<br>

    {{ text | summary:length() }}

  `,
})
export class CustomPipePage {

  length = signal<number>(50);

  price = 1.9926543;

  dt = new Date();

  text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos cupiditate? Iste aperiam fugiat officia natus possimus molestiae nostrum asperiores dolorem tempora molestias! Est ab autem explicabo mollitia illo obcaecati.";


}
