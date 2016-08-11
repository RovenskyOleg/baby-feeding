import {Component, OnInit, Input} from '@angular/core';
import {BabyFeedingService} from './../../service/baby-feeding/baby-feeding.service'
import {BabyFeedingItem} from './../../service/baby-feeding/baby-feeding-item'

@Component({
  selector: 'baby-feeding',
  pipes: [],
  providers: [BabyFeedingService],
  directives: [],
  styleUrls: ['./babyFeeding.css'],
  templateUrl: './babyFeeding.html'
})

export class BabyFeeding implements OnInit {
    items:BabyFeedingItem[] = [];

    @Input() type:string;

    constructor(private BabyFeedingService: BabyFeedingService) { }

    ngOnInit() {
        this.items = this.BabyFeedingService.getBabyFeedingItems();
    }

    addItem(startFeeding:Object, endFeeding:Object, date:Date) {
        console.log(startFeeding, endFeeding, date);
        // this.items.push(new BabyFeedingItem());
    }
}
