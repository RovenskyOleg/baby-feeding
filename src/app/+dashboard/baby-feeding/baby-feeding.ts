import {Component, OnInit, Input} from '@angular/core';
import {BabyFeedingService} from './../../service/baby-feeding/baby-feeding.service'
import {BabyFeedingItem} from './../../service/baby-feeding/baby-feeding-item'
import {BabyFeedingRenderer} from './baby-feeding-renderer'

@Component({
  selector: 'baby-feeding',
  pipes: [],
  providers: [BabyFeedingService],
  directives: [BabyFeedingRenderer],
  styleUrls: ['./baby-feeding.css'],
  templateUrl: './baby-feeding.html'
})

export class BabyFeeding implements OnInit {
    items:BabyFeedingItem[] = [];
    feeding = new BabyFeedingItem(0, {}, {}, '', new Date());
    isEditMode = false;
    isNewFeeding = true;
    // isFeedingView = true;

    @Input() type:string;

    constructor(private BabyFeedingService: BabyFeedingService) { }

    ngOnInit() {
        this.items = this.BabyFeedingService.getBabyFeedingItems();
    }

    ngOnChanges() {
        console.log('type', this.type);    
    }
}
