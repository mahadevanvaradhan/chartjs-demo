import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import data from './cumm-net-cash-flow-data';

@Component({
  selector: 'cumm-net-cash-flow',
  templateUrl: './cumm-net-cash-flow.component.html',
  styleUrls: ['./cumm-net-cash-flow.component.scss'],
})
export class CummNetCashFlowComponent implements OnInit {
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
    this.chart = new Chart('CummNetCashFlowChart', {
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
