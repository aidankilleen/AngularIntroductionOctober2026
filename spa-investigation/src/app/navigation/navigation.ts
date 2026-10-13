import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navigation',
  styleUrl: './navigation.css',
  template: `
    <nav>
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact:true}">Home</a> |
      <a routerLink="/about" routerLinkActive="active">About</a> |
      <a routerLink="/contact" routerLinkActive="active">Contact</a> |
      <a routerLink="/help" routerLinkActive="active">Help</a> |
    </nav>

  `,
})
export class Navigation {}
