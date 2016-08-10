import {Component, OnInit} from '@angular/core';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {BabyFeedingService} from './../service/baby-feeding/baby-feeding.service'

import * as moment from 'moment';

@Component({
    selector: 'report',
    pipes: [],
    providers: [BabyFeedingService],
    directives: [CHART_DIRECTIVES],
    styleUrls: ['./report.component.css'],
    templateUrl: './report.component.html'
})

export class ReportComponent implements OnInit {
    constructor(private BabyFeedingService: BabyFeedingService) { }

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Baby Feeding'
        }
    ];

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    ngOnInit(){
        console.log('*** BabyFeedingService ***', this.BabyFeedingService.getBabyFeeding());
        console.log(moment().format('YYYY/MM/DD'));
    }
}
