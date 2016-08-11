import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dashboard-header-component',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./dashboard-header.component.css'],
  templateUrl: './dashboard-header.component.html'
})

export class DashboardHeader {
    selectedType: string;

    @Output() type = new EventEmitter();

    constructor() {
        this.selectedType = 'lactation';
    }

    public setSelecteedType(e) {
        this.selectedType = e.target.value;

        this.type.emit(this.selectedType);
    }
}
