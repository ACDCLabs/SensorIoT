import { Component, OnInit } from '@angular/core';
import { Sensor } from '../models/sensor/sensor';
import { SensorDescriptor } from '../models/sensor-descriptor/sensor-descriptor';
import { SensorList } from '../models/sensor-list/sensor-list';
import { Run } from '../models/run/run';
import { HistoryChartComponent } from '../charts/history-chart/history-chart.component';
import { BackendCloudService } from '../backendCloudService.service';


@Component({
  selector: 'sensor-history',
  templateUrl: './sensor-history.component.html',
  styleUrls: ['./sensor-history.component.css'],
  providers: [BackendCloudService]
})

export class SensorHistoryComponent implements OnInit {

  private startDate: Date;
  private endDate: Date;

  private run: Run;
  private runs: Run[];

  private sensor: Sensor;
  private sensors: Sensor[] = [];
  private sensorList = SensorList;

  constructor(private backendCloudService: BackendCloudService) {
    this.run = new Run;
  }


  // private test: Sensor ;
  // private testarray: Sensor[] =[{time: this.startDate, num: 1, temp: 2}];
  private tempHistory = [this.startDate, 1];


  ngOnInit() {
    // console.log("HistoryComponent ngInit");
    let today = new Date().valueOf();
    let backInMillis = 60 * 60 * 1000*24; // one day
    this.startDate = new Date(today - backInMillis);
    this.endDate = new Date();
    // console.log(this.startDate);
    this.backendCloudService.getRunList().subscribe((data) => {
      this.runs = data;
      // console.log(this.runs);
    });
    this.backendCloudService.getLastRunNumber().subscribe(
      (num) => {
        this.run.runnumber = num;
        this.updateChart(this.startDate, this.endDate, this.run.runnumber);
      });
  }

  private onClickRunNum(runNum: number) {
    this.run.runnumber= runNum;
    this.updateChart(this.startDate, this.endDate, runNum);
    console.log(runNum);
  }

  private onClickDelete(runNum: number) {
    this.backendCloudService.deleteRun(runNum).subscribe(
      (res) => {
        this.backendCloudService.getRunList().subscribe((data) => {
          this.runs = data});
        console.log(res);
      }
    )
  }

  private updateChart(startDate: Date, endDate: Date, runNumber: number) {
    this.backendCloudService.getHistoricSensorValues(startDate, endDate, this.run.runnumber).subscribe((data) => {
      this.sensors = data;
      console.log(this.sensors);
      this.tempHistory = this.buildChartArray(this.sensors);
      // console.log(this.tempHistory);
    });
  }

  private buildChartArray(sensorData: Sensor[]): Array<any> {
    return sensorData.map((data) => { return [new Date(data['time']).valueOf(), data['pressure']]; });
  }

  private clacRunStatistics(): void {

  }
}
