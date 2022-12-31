import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import barChartData from './initial-investment-data';

@Component({
  selector: 'app-initial-investment',
  templateUrl: './initial-investment.component.html',
  styleUrls: ['./initial-investment.component.scss'],
})
export class BarChartComponent implements OnInit {
  public chart: any;

  public barChartLabels: any;
  public barChartType: string = 'bar';
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

  public barChartData: any;

  constructor() {}

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: barChartData,
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
              display: true,
              position: 'bottom',
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
