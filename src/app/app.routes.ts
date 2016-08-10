import { provideRouter, RouterConfig } from '@angular/router';

import {AboutComponent} from './about';
import {RegistrationBabyComponent} from './registration-baby';
import {DashboardComponent} from './dashboard';
import {ReportComponent} from './report';

const routes: RouterConfig = [
  { path: '', redirectTo: 'about', terminal: true },
  { path: 'about', component: AboutComponent },
  { path: 'registration-baby', component: RegistrationBabyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'report', component: ReportComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
