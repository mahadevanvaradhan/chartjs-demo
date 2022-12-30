import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import data from './new-investment-data';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrls: ['./new-investment.component.scss'],
})
export class NewInvestmentComponent implements OnInit {
  public chart: any;
  constructor() {}
  createChart() {
    this.chart = new Chart('MyInvetmentChart', {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          data: [
            50, 30, 60, 70, 80, 90, 95, 70, 90, 20, 60, 95
          ],
          type: 'line',
          label: 'This Year',
          fill: false,
          backgroundColor: "#fff",
          borderColor: "#c24d2c",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          // lineTension: 0.3,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#70cbf4",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#70cbf4",
          pointHoverBorderColor: "#70cbf4",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10
        }, 
        {
          label: 'New Investment',
          backgroundColor: "#06283D",
          yAxisID: "bar-y-axis",
          data: [
            50, 44, 52, 62, 48, 58, 59, 50, 51, 52, 53, 54
          ]
        }, 
        {
          label: 'Old Investment',
          backgroundColor: "#47B5FF",
          yAxisID: "bar-y-axis",
          data: [
            20, 56, 24, 25, 26, 17, 28, 19, 20, 11, 22, 33
          ]
        }]
      },
      options: {
        scales: {
          y: {
            // beginAtZero: true,
            stacked: true
          },
          x: {
              stacked: false,
            },
          },
      },
    }
    );
  }
  ngOnInit(): void {
    this.createChart();
  }
}
