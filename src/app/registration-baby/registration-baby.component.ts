import {Component, OnInit} from '@angular/core'
import {BabyService} from './baby.service'

@Component({
  selector: 'registration-baby',
  pipes: [],
  providers: [BabyService],
  directives: [],
  styleUrls: ['./registration-baby.component.css'],
  templateUrl: './registration-baby.component.html'
})

export class RegistrationBabyComponent implements OnInit {
    genders = ['male', 'female'];
    model;
    submitted = false;

    constructor(private babyService: BabyService) { }

    onSubmit() {
        this.submitted = true;

        console.log('*** submit form baby ***', this.model);
    }

    ngOnInit(){
        console.log('*** ngOnInit ***');
        this.model = this.babyService.getBaby();

        console.log('*** baby model ***', this.model);
        console.log('*** baby model ***', this.model.birthdate);
    }
}
