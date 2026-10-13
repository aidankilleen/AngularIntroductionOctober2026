import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { HelpPage } from './help-page/help-page';
import { AdminPage } from './admin-page/admin-page';

export const routes: Routes = [

  { path: '', title: "Home", component: HomePage },
  { path: 'about', title: "About", component: AboutPage },
  { path: 'contact', title: "Contact", component: ContactPage },
  { path: 'help', title: "Help", component: HelpPage },
  { path: 'admin', title: "Admin", component: AdminPage },

];
