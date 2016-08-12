import {Component, Input} from '@angular/core';
import {BabyFeedingItem} from './../../service/baby-feeding/baby-feeding-item'

@Component({
    selector: 'baby-feeding-renderer',
    templateUrl: './baby-feeding-renderer.html'
})

export class BabyFeedingRenderer {
    @Input() item:any;
    @Input() items:any;
    @Input() isEditMode:boolean;
    @Input() isNewFeeding:boolean;
    // @Input() isFeedingView:boolean;
    
    addItem(startFeeding, endFeeding) {
        console.log('test items', this.item);

        this.items.push(new BabyFeedingItem(20, startFeeding, endFeeding, 'lactation', new Date('2016-08-30')))
    }
}
