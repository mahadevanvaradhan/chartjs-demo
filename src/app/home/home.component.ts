import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="act-home">
                <div class="list-item">
              <h3>Chart Examples - Chart JS & ApexChart</h3>
              <ul>


                  <li><a [routerLink]="'/sidenav'">Insights</a></li>
                  <li><a [routerLink]="'/barchart'">Fund vs Investment</a></li>
                  <li><a [routerLink]="'/capitaldeployed'">Capital Deployed</a></li>
                  <li><a [routerLink]="'/tvpi'">TVPI</a></li>
                  <li><a [routerLink]="'/lpcalledcapital'">LP Called Capital</a></li>
                  <li><a [routerLink]="'/netcashflow'">Net Cash Flow</a></li>
                  <li><a [routerLink]="'/grossirr'">Gross IRR</a></li>
                  
              </ul>
            </div>
            <app-sidenav></app-sidenav>
            </div>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
