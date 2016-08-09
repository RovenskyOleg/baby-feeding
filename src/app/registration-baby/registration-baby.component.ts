import {Component} from '@angular/core'
import {Baby} from './baby'

@Component({
  selector: 'registration-baby',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./registration-baby.component.css'],
  templateUrl: './registration-baby.component.html'
})

export class RegistrationBabyComponent {
  genders = ['male', 'female'];
  model = new Baby(0, 'first name', 'last name', 'm');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('*** baby model ***', this.model);
  }

  newBaby() {
    this.model = new Baby(42, '', '', '');
  }
}
