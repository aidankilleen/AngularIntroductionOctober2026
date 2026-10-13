import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  imports: [TitleCasePipe],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
  <div [class]="darkMode() ? 'dark' : 'light'">
    <h1>{{ title() | titlecase }}</h1>
    <button (click)="name.set('')">Reset</button>
    <input
      [value]="name()"
      (input)="onInput(txtName.value)"

      #txtName
    /> {{ name() }}
    <!-- #txtName is a "template variable" that references the input control -->
    <hr>
    Dark Mode:
    <input
      type="checkbox"
      [checked]="darkMode()"
      (input)="onChecked(chkDarkMode.checked)"

      #chkDarkMode
    /> {{ darkMode() }}

    <input
      type="color"
      [value]="colour()"
      (input)="colour.set(colourBg.value)"

      #colourBg
    /> {{ colour() }}

    <div [style]="{
        'background-color':colour(),
        'width':'100px',
        'height':'100px'
      }">

    </div>
    <hr>

    <input
      type="range"
      [value]="angle()"
      (input)="angle.set(rngAngle.valueAsNumber)"
      max="360"
      #rngAngle
    /> {{ angle() }}

    <div
      [style]="{
        width: '100px',
        height: '100px',
        'background-color': 'lightcoral',
        'transform': 'rotate(' + angle() + 'deg)'
      }"
    ></div>
</div>
  `,
})
export class App {
  protected readonly title = signal('data binding investigation');

  angle = signal<number>(0);

  colour = signal<string>('blue');

  name = signal<string>("Alice");
  darkMode = signal<boolean>(false);

  onChecked(checked:boolean) {
    console.log(`checked ${checked}`);
    this.darkMode.set(checked);
  }

  onInput(value:string ) {
    console.log(value);
    this.name.set(value);

  }
}
