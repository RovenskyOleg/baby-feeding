import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Footer} from './footer/footer'

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES, Footer],
  templateUrl: './app.html',
})

export class App {
  constructor() {}
}
