import { Component, ViewChild, OnInit } from '@angular/core';
import data from './apex-stacked-data';

@Component({
  selector: 'app-apex-stacked',
  templateUrl: './apex-stacked.component.html',
  styleUrls: ['./apex-stacked.component.scss'],
})
export class ApexStackedComponent implements OnInit {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: data.series,
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'category',
        categories: data.category,
      },
      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };
  }

  ngOnInit(): void {}
}
