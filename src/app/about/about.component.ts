import {Component} from '@angular/core';
// import {CORE_DIRECTIVES} from '@angular/common';
// import {FORM_DIRECTIVES} from '@angular/forms';
// import { disableDeprecatedForms, provideForms } from '@angular/forms'
// import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  date = new Date();
}
