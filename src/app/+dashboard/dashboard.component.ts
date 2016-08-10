import {Component, OnInit} from '@angular/core';
import {DashboardHeader} from './dashboard-header/dashboard-header.component'
import {BabyFeeding} from './babyFeeding/babyFeeding'
import {BabyFeedingService} from './../service/baby-feeding/baby-feeding.service'

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [BabyFeedingService],
  directives: [DashboardHeader, BabyFeeding],
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    constructor(private BabyFeedingService: BabyFeedingService) { }

    ngOnInit(){
        console.log('*** BabyFeedingService ***', this.BabyFeedingService.getBabyFeeding());
    }
}
