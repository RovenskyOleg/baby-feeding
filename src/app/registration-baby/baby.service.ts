import {Injectable} from '@angular/core';
import {Baby} from './baby';

@Injectable()

export class BabyService {
    baby = new Baby(0, 'first name', 'last name', 'male');

    getBaby() {
        return this.baby;
    }
}
