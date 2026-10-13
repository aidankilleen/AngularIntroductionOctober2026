import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { DynamicNavigation } from './dynamic-navigation/dynamic-navigation';

@Component({
  imports: [RouterOutlet, TitleCasePipe, RouterLinkWithHref, RouterLinkActive, Navigation, DynamicNavigation],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <h1>{{ title() | titlecase }}</h1>

    <app-dynamic-navigation/>

    <hr>
    <router-outlet/>
  `,
})
export class App {
  protected readonly title = signal('spa investigation');
}
