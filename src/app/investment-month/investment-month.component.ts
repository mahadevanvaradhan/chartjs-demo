import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './investment-month-data';

@Component({
  selector: 'app-investment-month',
  templateUrl: './investment-month.component.html',
  styleUrls: ['./investment-month.component.scss'],
})
export class InvestmentMonthComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyInvetmentMonthChart', {
      type: 'polarArea', //this denotes tha type of chart
      data: data,
      options: {
        aspectRatio: 2.0,
        responsive: true,
        plugins: {
          legend: {
              display: true,
              position: 'left',
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
