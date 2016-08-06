import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './about/about';
import {RegistrationBaby} from './RegistrationBaby/registrationBaby';
import {Dashboard} from './dashboard/dashboard';
import {Report} from './report/report';

const routes: RouterConfig = [
  { path: '', redirectTo: 'about', terminal: true },
  { path: 'about', component: About },
  { path: 'registration-baby', component: RegistrationBaby },
  { path: 'dashboard', component: Dashboard },
  { path: 'report', component: Report },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
