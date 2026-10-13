import { Component, Input, input, signal } from '@angular/core';
import Content from '../content';

@Component({
  imports: [],
  selector: 'app-message',
  styleUrl: './message.css',
  template: `
    <div [class]="{'important-message':content().important }">
      @if (content().important) {
        <span>*****IMPORTANT</span>
      } @else {
        <span>Regular</span>
      }
      <h1>{{ content().title }}</h1>
      <p>{{ content().text }}</p>
    </div>
  `,
})
export class Message {

  content = input<Content>(
    new Content("Default Title", "Default text", false)
  );

  

  // regular member variables are not really used any more
  // title="This is the title";
  // use a "signal" instead
  // title = signal("This is a Signal Title");
  // there is a type of signal called an input
  // we use input() for attributes on our custom components
  //title = input("Default title");
  //text = input("Default text");


  // decorator syntax has been deprecated
  //@Input()
  //old_title:string = "old syntax";

}
