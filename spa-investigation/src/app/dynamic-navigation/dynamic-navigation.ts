import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-dynamic-navigation',
  styleUrl: './dynamic-navigation.css',
  template: `
    <nav>
      @for (route of navigationList; track route) {
        <a
          [routerLink] = "route.path"
          routerLinkActive = "active"
          [routerLinkActiveOptions]="{exact:route.path==''}"
        >
          {{route.title}}
        </a>
        @if(!$last) {
          |
        }
      }
    </nav>
  `,
})
export class DynamicNavigation {

  navigationList = routes;
}
