import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './return-month-data';

@Component({
  selector: 'app-return-month',
  templateUrl: './return-month.component.html',
  styleUrls: ['./return-month.component.scss'],
})
export class ReturnMonthComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyReturnMonthChart', {
      type: 'doughnut', //this denotes tha type of chart
      data: data,
      options: {
        aspectRatio: 2.0,
        responsive: true,
        plugins: {
          legend: {
              display: true,
              position: 'right',
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
        },
      },
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
