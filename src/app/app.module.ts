import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialExampleModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import {HttpClientModule} from '@angular/common/http';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ApexStackedComponent } from './apex-stacked/apex-stacked.component';

import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './initial-investment/initial-investment.component';
import { GrossIRRComponent } from './gross-irr/gross-irr.component';
import { CapitalDeployedComponent } from './capital-deployed/capital-deployed.component';
import { TvpiComponent } from './tvpi/tvpi.component';
import { LPCalledCapitalComponent } from './lp-called-capital/lp-called-capital.component';
import { NetCashFlowComponent } from './net-cash-flow/net-cash-flow.component';
import { CummNetCashFlowComponent } from './cumm-net-cash-flow/cumm-net-cash-flow.component';
import {SidenavComponent} from './sidebar/sidenav.component';
import { InvestmentMonthComponent } from './investment-month/investment-month.component'
import { ReturnMonthComponent } from './return-month/return-month.component'
import { NewInvestmentComponent } from './new-investment/new-investment.component'
import { TierReturnComponent } from './tier-return/tier-return.component'
import { PortfolioValueComponent } from './portfolio-value/portfolio-value.component'
import { NetIRRComponent } from './net-irr/net-irr.component'

@NgModule({
  declarations: [AppComponent, BarChartComponent, GrossIRRComponent, ApexChartComponent, ApexStackedComponent, InvestmentMonthComponent,
    HomeComponent, SidenavComponent, CapitalDeployedComponent, TvpiComponent, LPCalledCapitalComponent, NewInvestmentComponent, 
    TierReturnComponent, CummNetCashFlowComponent, NetCashFlowComponent, ReturnMonthComponent, PortfolioValueComponent, NetIRRComponent],
  imports: [SidebarModule, BrowserModule, AppRoutingModule, NgApexchartsModule, BrowserAnimationsModule, BrowserModule,
    FormsModule,
    MaterialExampleModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
