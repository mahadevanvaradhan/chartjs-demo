import { Component, OnInit, ViewChild } from '@angular/core';
import data from './apex-chart-data';
import {
  ApexChart,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss'],
})
export class ApexChartComponent implements OnInit {
  chartSeries: ApexNonAxisChartSeries = data.chartSeries;

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true,
    },
  };

  chartLabels = data.chartLabels;

  chartTitle: ApexTitleSubtitle = {
    text: 'Leading Companies',
    align: 'center',
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
