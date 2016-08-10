import {Injectable} from '@angular/core';
import {Baby} from './baby';

@Injectable()

export class BabyService {
    baby = new Baby(0, 'first name', 'last name', 'male', {date: 10, year: 2000, month: 4, hour: 14, minutes: 20});

    getBaby() {
        return this.baby;
    }
}
