import {Component, Input} from '@angular/core';

@Component({
    selector: 'baby-feeding-renderer',
    templateUrl: './baby-feeding-renderer.html'
})

export class BabyFeedingRenderer {
    @Input() item;
    @Input() isEditMode:boolean;
    @Input() isNewFeeding:boolean;
    // @Input() isFeedingView:boolean;

    // addItem(startFeeding:Object, endFeeding:Object, date:Date) {
    //     console.log(startFeeding, endFeeding, date);
    //     // this.items.push(new BabyFeedingItem());
    // }
    addItem(startFeeding, endFeeding) {
        console.log('test');
        console.log(startFeeding, endFeeding);
    }
}
