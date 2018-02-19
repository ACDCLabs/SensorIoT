import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }   from '@angular/http';
import { AppComponent } from './app.component';
import { ParticleCloudService } from './particleCloudService.service';
import { BackendCloudService } from './backendCloudService.service';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartModule } from 'angular-highcharts';
import { TempGaugeComponent} from './charts/tempGauge/tempGauge.component';
import { TempGaugeCtrlComponent} from './charts/tempGaugeCtrl/tempGaugeCtrl.component';
import { TempChartComponent } from './charts/temp-chart/temp-chart.component';
import { TempProfileChartComponent } from './charts/temp-profile-chart/temp-profile-chart.component';
import { SensorChartComponent} from './sensor-chart/sensor-chart.component';
import { SensorDashboardComponent} from './sensor-dashboard/sensor-dashboard.component';
import { AppRoutingModule } from './/app-routing.module'
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule} from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeatmapComponent } from './charts/heatmap/heatmap.component';
import { SensorHistoryComponent } from './sensor-history/sensor-history.component';
import { HistoryChartComponent } from './charts/history-chart/history-chart.component';
import { Sensor } from './models/sensor/sensor';
import { Run } from './models/run/run';
import { SensorDescriptor } from './models/sensor-descriptor/sensor-descriptor';
import { ClockService } from './clock.service';
import { FormsModule }   from '@angular/forms';

//import { SensorList } from './models/sensor-list/sensor-list';

@NgModule({
  declarations: [
    AppComponent,
    TempGaugeComponent,
    TempGaugeCtrlComponent,
    TempChartComponent,
    TempProfileChartComponent,
    SensorChartComponent,
    SensorDashboardComponent,
    NavbarComponent,
    HeatmapComponent,
    SensorHistoryComponent,
    HistoryChartComponent,
    Sensor,
    SensorDescriptor,
    Run
    // SensorList
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    NgxGaugeModule,
    ChartModule,
    AppRoutingModule,
    FormsModule
  ],

    providers: [
      BackendCloudService,
      ClockService,
      ParticleCloudService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
