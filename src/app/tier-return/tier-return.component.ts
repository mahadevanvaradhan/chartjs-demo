import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import data from './tier-return-data';

@Component({
  selector: 'app-tier-return',
  templateUrl: './tier-return.component.html',
  styleUrls: ['./tier-return.component.scss'],
})
export class TierReturnComponent implements OnInit {
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
    this.chart = new Chart('TierChart', {
      type: 'line', //this denotes tha type of chart

      data: data,
      options: {
        aspectRatio: 2.0,
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
