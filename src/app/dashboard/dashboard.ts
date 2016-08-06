import {Component} from '@angular/core';
import {Header} from './header/header'
import {BabyFeeding} from './babyFeeding/babyFeeding'
import {Footer} from './footer/footer'

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [],
  directives: [Header, Footer, BabyFeeding],
  styleUrls: ['./dashboard.css'],
  templateUrl: './dashboard.html'
})

export class Dashboard {
}
