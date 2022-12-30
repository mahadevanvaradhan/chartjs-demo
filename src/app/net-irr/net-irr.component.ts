import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './net-irr-data';

@Component({
  selector: 'app-net-irr',
  templateUrl: './net-irr.component.html',
  styleUrls: ['./net-irr.component.scss'],
})
export class NetIRRComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyNetIRRChart', {
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
