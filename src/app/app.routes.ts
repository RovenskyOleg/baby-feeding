import { provideRouter, RouterConfig } from '@angular/router';

import {AboutComponent} from './about/about.component';
import {RegistrationBabyComponent} from './RegistrationBaby/registration-baby.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportComponent} from './report/report.component';

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
