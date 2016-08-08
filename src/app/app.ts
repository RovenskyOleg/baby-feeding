import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {FooterComponent} from './footer/footer.component'

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES, FooterComponent],
  templateUrl: './app.html',
})

export class App {
  constructor() {}
}
