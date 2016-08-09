import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [AlertComponent],
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  date = new Date();
}
