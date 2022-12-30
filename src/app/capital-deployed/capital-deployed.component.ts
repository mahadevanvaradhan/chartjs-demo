import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './capital-deployed-data';

@Component({
  selector: 'app-capital-deployed',
  templateUrl: './capital-deployed.component.html',
  styleUrls: ['./capital-deployed.component.scss'],
})
export class CapitalDeployedComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('mycapitalChart', {
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
