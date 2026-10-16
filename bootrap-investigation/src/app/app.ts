import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';

@Component({
  imports: [RouterOutlet, TitleCasePipe, Navigation],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <h1>{{ title()| titlecase }}</h1>

    <app-navigation/>

    <hr>
    <router-outlet/>

  `,
})
export class App {
  protected readonly title = signal('bootrap investigation');
}
