import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './tvpi-data';

@Component({
  selector: 'app-tvpi',
  templateUrl: './tvpi.component.html',
  styleUrls: ['./tvpi.component.scss'],
})
export class TvpiComponent implements OnInit {
  public chart: any;
  public barChartData: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('TVPIChart', {
      type: 'bar', //this denotes tha type of chart
      data: data,
      options: {
        aspectRatio: 2.5,
        responsive: true,
        plugins: {
          legend: {
              display: true,
              position: 'bottom',
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
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
