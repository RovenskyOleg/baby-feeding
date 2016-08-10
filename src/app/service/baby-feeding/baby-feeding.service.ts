import {Injectable} from '@angular/core';
import {BabyFeeding} from './baby-feeding';

@Injectable()

export class BabyFeedingService {
    babyFeeding = [
        new BabyFeeding(0, {hour: 12, minutes: 12}, {hour: 12, minutes: 14}, 'lactation', new Date()),
        new BabyFeeding(0, {hour: 13, minutes: 12}, {hour: 13, minutes: 14}, 'lactation', new Date()),
        new BabyFeeding(0, {hour: 15, minutes: 12}, {hour: 15, minutes: 14}, 'lactation', new Date()),
        new BabyFeeding(0, {hour: 17, minutes: 12}, {hour: 17, minutes: 14}, 'lactation', new Date()),
        new BabyFeeding(0, {hour: 12, minutes: 12}, {hour: 12, minutes: 14}, 'bottle feeding', new Date('2016-08-29')),
        new BabyFeeding(0, {hour: 14, minutes: 12}, {hour: 14, minutes: 14}, 'bottle feeding', new Date('2016-08-29'))
    ];

    getBabyFeeding() {
        return this.babyFeeding;
    }

    getFeedingInDate(date) {

    }
}
