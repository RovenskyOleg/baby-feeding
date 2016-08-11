import {Component} from '@angular/core';
import {DashboardHeader} from './dashboard-header';
import {BabyFeeding} from './baby-feeding';

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [],
  directives: [DashboardHeader, BabyFeeding],
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
    selectedType: string;

    updatedTypeFeeding(typeFeeding) {
        this.selectedType = typeFeeding;
    }
}
