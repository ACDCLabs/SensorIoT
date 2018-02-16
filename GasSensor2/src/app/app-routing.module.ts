import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorChartComponent } from './sensor-chart/sensor-chart.component';
import { TempGaugeCtrlComponent } from './charts/tempGaugeCtrl/tempGaugeCtrl.component';
import { SensorDashboardComponent } from './sensor-dashboard/sensor-dashboard.component';
import { SensorHistoryComponent } from './sensor-history/sensor-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SensorDashboardComponent },
  { path: 'gaugeCtrl', component: TempGaugeCtrlComponent },
  { path: 'chart', component: SensorChartComponent },
  { path: 'history', component: SensorHistoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
