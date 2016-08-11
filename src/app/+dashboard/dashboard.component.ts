import {Component} from '@angular/core';
import {DashboardHeader} from './dashboard-header/dashboard-header.component'
import {BabyFeeding} from './babyFeeding/babyFeeding'

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [],
  directives: [DashboardHeader, BabyFeeding],
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
}
