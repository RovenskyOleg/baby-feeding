import {Component} from '@angular/core';
import {Header} from './header/header'
import {BabyFeeding} from './babyFeeding/babyFeeding'

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [],
  directives: [Header, BabyFeeding],
  styleUrls: ['./dashboard.css'],
  templateUrl: './dashboard.html'
})

export class Dashboard {
}
