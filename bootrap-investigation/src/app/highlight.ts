import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.background]':"hover() ? colour() : 'green'",
    '(click)': "onClick()",
    '(mouseenter)': "hover.set(true)",
    '(mouseleave)': "hover.set(false)",
  }
})
export class Highlight {

  hover = signal<boolean>(false);

  colour = input<string>("blue", {
    alias: "appHighlight"
  });

  constructor() {
    console.log("Highlight constuctor called");
  }

  onClick() {
    alert("Clicked" + this.colour());
  }
}
