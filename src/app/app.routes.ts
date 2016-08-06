import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './about/about';
import {RegistrationBaby} from './RegistrationBaby/registrationBaby';
import {Dashboard} from './dashboard/dashboard';
import {Report} from './report/report';

import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

const routes: RouterConfig = [
  { path: '', redirectTo: 'about', terminal: true },
  { path: 'about', component: About },
  { path: 'registration-baby', component: RegistrationBaby },
  { path: 'dashboard', component: Dashboard },
  { path: 'report', component: Report },
  // { path: 'dashboard', component: Dashboard, children:[
  //  {path: '', component: Header},
  //  {path: '', component: Babyfeeding}
  //  {path: '', component: Notification}
  //  {path: '', component: Footer}
  // ]},
  { path: 'github', component: RepoBrowser, children: [
    { path: ':org', component: RepoList, children: [
      { path: ':repo', component: RepoDetail },
      { path: '', component: RepoDetail }
    ]},
    { path: '', component: RepoList}
  ]}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
