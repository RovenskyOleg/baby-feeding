import {Injectable} from '@angular/core';
import {BabyFeedingItem} from './baby-feeding-item';

import * as moment from 'moment';

@Injectable()

export class BabyFeedingService {
    babyFeeding = [
        new BabyFeedingItem(0, {hour: 12, minutes: 12}, {hour: 12, minutes: 14}, 'lactation', new Date()),
        new BabyFeedingItem(0, {hour: 13, minutes: 12}, {hour: 13, minutes: 14}, 'lactation', new Date()),
        new BabyFeedingItem(0, {hour: 15, minutes: 12}, {hour: 15, minutes: 14}, 'lactation', new Date()),
        new BabyFeedingItem(0, {hour: 17, minutes: 12}, {hour: 17, minutes: 14}, 'lactation', new Date()),
        new BabyFeedingItem(0, {hour: 12, minutes: 12}, {hour: 12, minutes: 14}, 'bottle feeding', new Date('2016-08-29')),
        new BabyFeedingItem(0, {hour: 14, minutes: 12}, {hour: 14, minutes: 14}, 'bottle feeding', new Date('2016-08-29')),
        new BabyFeedingItem(0, {hour: 14, minutes: 12}, {hour: 14, minutes: 14}, 'bottle feeding', new Date('2016-08-30'))
    ];

    getBabyFeedingItems():BabyFeedingItem[] {
        return this.babyFeeding;
    }

    formatDate(date) {
        return moment(date).format('YYYY-MM-DD');
    }

    compareEqualsDate(dateA, dateB) {
        let momentA = this.formatDate(dateA);
        let momentB = this.formatDate(dateB);

        return moment(momentA).isSame(momentB);
    }

    getFeedingDateReport() {
        let data = this.getBabyFeedingItems();
        let counter = 0;
        let prevDate;
        let counterFeeding = 0;
        let report = {
            date: [],
            feeding: []
        };
        let lengthData = data.length;

        for (var item of data) {
            if (counter === 0) {
                prevDate = item.date;
                counterFeeding++;
                counter++;
            } else {
                if (this.compareEqualsDate(prevDate, item.date)) {
                    counterFeeding++;
                    counter++;
                } else {
                    report.feeding.push(counterFeeding);
                    report.date.push(this.formatDate(prevDate));

                    counterFeeding = 1;
                    prevDate = item.date;
                    counter++;
                }

                if (lengthData === counter) {
                    report.feeding.push(counterFeeding);
                    report.date.push(this.formatDate(prevDate));
                }
            }
        }

        return report;
    }
}
