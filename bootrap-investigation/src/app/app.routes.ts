import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { DirectiveInvestigationPage } from './directive-investigation-page/directive-investigation-page';
import { UsersPage } from './users-page/users-page';
import { UserDetailPage } from './user-detail-page/user-detail-page';
import { CustomPipePage } from './custom-pipe-page/custom-pipe-page';
import { DataBindingPage } from './data-binding-page/data-binding-page';
import { FormsInvestigationPage } from './forms-investigation-page/forms-investigation-page';
import { SignalsInvestigationPage } from './signals-investigation-page/signals-investigation-page';
import { SignalFormsPage } from './signal-forms-page/signal-forms-page';
import { WrapperInvestigationPage } from './wrapper-investigation-page/wrapper-investigation-page';
import { BetterAccordionPage } from './better-accordion-page/better-accordion-page';

export const routes: Routes = [
  { path:'', title:"Home", component: HomePage },
  { path:'about', title:"About Us", component: AboutPage },
  { path:'contact', title:"Contact Us", component: ContactPage },
  { path:'directives', title:"Directives", component: DirectiveInvestigationPage },
  { path:'users', title:"Users", component: UsersPage },
  { path:'users/:id', title:"", component: UserDetailPage },
  { path:'custom-pipe', title:"Custom Pipe", component: CustomPipePage },
  { path:'data-binding', title:"Data Binding", component: DataBindingPage },
  { path:'forms-investigation', title:"Forms", component: FormsInvestigationPage },
  { path:'signals-investigation', title:"Signals", component: SignalsInvestigationPage },
  { path:'signals-forms', title:"Signal Forms", component: SignalFormsPage },
  { path:'wrapper-investigation', title:"Wrapper Investigation", component: WrapperInvestigationPage },
  { path:'better-accordion', title:"Better Accordion", component: BetterAccordionPage },
];
