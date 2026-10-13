import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './message/message';
import Content from './content';
import { Counter } from './counter/counter';

@Component({
  imports: [RouterOutlet, Message, Counter],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <h1>{{ title() }}</h1>


    <!-- counters should have a red background if the number is negative -->
    <!-- counters should have a green background if the number is positive -->
    <!-- exercise until 14.50 -->

    <app-counter></app-counter>
    <app-counter></app-counter>

    <hr>

    <!-- regular html components interact with the rest of the page using events on... -->
    <button (click) = "onClick()">Press Me</button>

<div>This is a normal unstyled div</div>

    @for (content of contents; track content) {
      <app-message
        [content] = "content"
      >
      </app-message>
    }
    <ul>
        @for(name of names; track name) {

          <li>{{ name }}</li>
        }

        <!-- *ngFor has been deprecated -->
    </ul>
  `,
})
export class App {

  onClick() {
    alert("is this working?");

  }


  protected readonly title = signal('Angular Hello World');

  //names: string[] = ["Alice", "Bob", "Carol", "Dan"];
  // types are optional when there is an immediate assignment
  // ts can infer the types
  names = ["Alice", "Bob", "Carol", "Dan"];

  contents: Content[] = [
    new Content("Content 1", "this is content 1", true),
    new Content("Content 2", "this is content 2", false),
    new Content("Content 3", "this is content 3", false),
  ];

  text = "this is text";

  message = {
    title: "Message 1",
    text: "This is message 1"
  }

}
