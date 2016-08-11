import {Component, Input} from '@angular/core';

@Component({
    selector: 'baby-feeding-renderer',
    templateUrl: './baby-feeding-renderer.html'
})

export class BabyFeedingRenderer {
    @Input() item; 
}
