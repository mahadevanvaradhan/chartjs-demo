import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './initial-investment-facing-data';

@Component({
  selector: 'app-initial-investment-facing',
  templateUrl: './initial-investment-facing.component.html',
  styleUrls: ['./initial-investment-facing.component.scss'],
})
export class InitialInvestmentFacingComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyInitialInvestmentFacingChart', {
      type: 'line', //this denotes tha type of chart

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
