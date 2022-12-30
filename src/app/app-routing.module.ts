import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { GrossIRRComponent } from './gross-irr/gross-irr.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ApexStackedComponent } from './apex-stacked/apex-stacked.component';
import { HomeComponent } from './home/home.component';
import { CapitalDeployedComponent } from './capital-deployed/capital-deployed.component';
import { TvpiComponent } from './tvpi/tvpi.component';
import { LPCalledCapitalComponent } from './lp-called-capital/lp-called-capital.component';
import { NetCashFlowComponent } from './net-cash-flow/net-cash-flow.component';
import {SidenavComponent} from './sidebar/sidenav.component'; 
import { InvestmentMonthComponent } from './investment-month/investment-month.component'
import { ReturnMonthComponent } from './return-month/return-month.component'
import { NewInvestmentComponent } from './new-investment/new-investment.component'
import { TierReturnComponent } from './tier-return/tier-return.component'
import { PortfolioValueComponent } from './portfolio-value/portfolio-value.component'
import { NetIRRComponent } from './net-irr/net-irr.component'
import { CummNetCashFlowComponent } from './cumm-net-cash-flow/cumm-net-cash-flow.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'barchart', component: BarChartComponent },
  { path: 'grossirr', component: GrossIRRComponent },
  { path: 'apexchart', component: ApexChartComponent },
  { path: 'apexstacked', component: ApexStackedComponent },
  { path: 'capitaldeployed', component: CapitalDeployedComponent },
  { path: 'tvpi', component: TvpiComponent },
  { path: 'lpcalledcapital', component: LPCalledCapitalComponent },
  { path: 'netcashflow', component: NetCashFlowComponent },
  { path: 'cummnetcashflow', component: CummNetCashFlowComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'investmonth', component: InvestmentMonthComponent },
  { path: 'returnmonth', component: ReturnMonthComponent },
  { path: 'newinvestment', component: NewInvestmentComponent },
  { path: 'tierreturn', component: TierReturnComponent },
  { path: 'portfoliovalue', component: PortfolioValueComponent },
  { path: 'netirr', component: NetIRRComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
