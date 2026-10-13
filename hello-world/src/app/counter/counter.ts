import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  template: `
  <div
    [class]="{
      'positive': value() >= 0,
      'negative': value() < 0
    }">
    Counter:s
    {{ value() }}
    <button (click)="onIncrement(1)">+</button>
    <button (click)="onIncrement(10)">++</button>
    <button (click)="onIncrement(-1)">-</button>
    <button (click)="onIncrement(-10)">--</button>
    <button (click)="onReset()">Reset</button>
  </div>
  `,
})
export class Counter {
  value = signal<number>(0);

  onIncrement(n: number) {
    this.value.set(this.value() + n);
  }

  // DRY - Don't Repeat Yourself
  // onIncrement does in 1 function what these 2 do
  /*
  onPlusClick() {
    this.value.set(this.value() + 1);
  }

  onMinusClick() {
    this.value.set(this.value() - 1);
  }
  */
  onReset() {
    this.value.set(0);
  }
}
