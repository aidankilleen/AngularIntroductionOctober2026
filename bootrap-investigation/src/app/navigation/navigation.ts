import { Component, signal } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [RouterLink, NgbCollapse, RouterLinkActive],
  selector: 'app-navigation',
  styleUrl: './navigation.css',
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      (click)="isCollapsed.set(!isCollapsed())"
      class="navbar-toggler"
      type="button"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"
        id="navbarNav"
        [ngbCollapse]="isCollapsed()">
      <ul class="navbar-nav">

        @for (item of navigationItems; track item.title) {
          <li class="nav-item">
            <a
              class="nav-link"
              [routerLink]="item.path"
              [routerLinkActive]="'active'"
              (click)="isCollapsed.set(true)"
            >
              {{item.title}}
            </a>
          </li>
        }
      </ul>
    </div>
  </div>
</nav>`,
})
export class Navigation {

  navigationItems = routes.filter(route => route.title != "");

  isCollapsed = signal<boolean>(true);
}
