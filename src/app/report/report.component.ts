import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {BabyFeedingService} from './../service/baby-feeding/baby-feeding.service'

@Component({
    selector: 'report',
    pipes: [],
    providers: [BabyFeedingService],
    directives: [CHART_DIRECTIVES],
    styleUrls: ['./report.component.css'],
    templateUrl: './report.component.html'
})

export class ReportComponent {
    constructor(private BabyFeedingService: BabyFeedingService) { }

    public reports:any = this.BabyFeedingService.getFeedingDateReport();

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = this.reports.date;
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {
            data: this.reports.feeding,
            label: 'Baby Feeding'
        }
    ];

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        // console.log(e);
    }
}
