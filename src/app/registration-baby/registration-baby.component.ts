import {Component, OnInit} from '@angular/core'
import {Baby} from './baby'
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
        console.log('*** baby model ***', this.model);
    }

    ngOnInit(){
        console.log('*** ngOnInit ***');
        console.log('*** baby ***', this.babyService.getBaby());
        this.model = this.babyService.getBaby();
    }
}
