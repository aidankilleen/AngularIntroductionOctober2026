import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { DirectiveInvestigationPage } from './directive-investigation-page/directive-investigation-page';
import { UsersPage } from './users-page/users-page';
import { UserDetailPage } from './user-detail-page/user-detail-page';

export const routes: Routes = [
  { path:'', title:"Home", component: HomePage },
  { path:'about', title:"About Us", component: AboutPage },
  { path:'contact', title:"Contact Us", component: ContactPage },
  { path:'directives', title:"Directives", component: DirectiveInvestigationPage },
  { path:'users', title:"Users", component: UsersPage },
  { path:'users/:id', title:"", component: UserDetailPage },
];
