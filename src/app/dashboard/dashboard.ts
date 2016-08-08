import {Component} from '@angular/core';
import {DashboardHeader} from './dashboard-header/dashboard-header'
import {BabyFeeding} from './babyFeeding/babyFeeding'

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [],
  directives: [DashboardHeader, BabyFeeding],
  styleUrls: ['./dashboard.css'],
  templateUrl: './dashboard.html'
})

export class Dashboard {
}
