import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import data from './lp-called-capital-data';

@Component({
  selector: 'app-lp-called-capital',
  templateUrl: './lp-called-capital.component.html',
  styleUrls: ['./lp-called-capital.component.scss'],
})
export class LPCalledCapitalComponent implements OnInit {
  public chart: any;

  public barChartLabels: any;
  public barChartType: string = 'line';
  public barChartLegend: boolean = true;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  public data: any;

  constructor() {}

  createChart() {
    this.chart = new Chart('LPChartCalledCapital', {
      type: 'line', //this denotes tha type of chart

      data: data,
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
              display: true,
              position: 'bottom',
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }
      },
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
