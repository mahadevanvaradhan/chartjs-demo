import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './gross-irr-data';

@Component({
  selector: 'app-gross-irr',
  templateUrl: './gross-irr.component.html',
  styleUrls: ['./gross-irr.component.scss'],
})
export class GrossIRRComponent implements OnInit {
  public chart: any;
  public barChartData: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('myGrossIrrChart', {
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
