import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './portfolio-value-data';

@Component({
  selector: 'app-portfolio-value',
  templateUrl: './portfolio-value.component.html',
  styleUrls: ['./portfolio-value.component.scss'],
})
export class PortfolioValueComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyPortfolioChart', {
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
