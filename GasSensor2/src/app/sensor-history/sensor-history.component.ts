import { Component, OnInit } from '@angular/core';
import { Sensor } from '../models/sensor/sensor';
import { SensorDescriptor } from '../models/sensor-descriptor/sensor-descriptor';
import { SensorList } from '../models/sensor-list/sensor-list';
import { HistoryChartComponent } from '../charts/history-chart/history-chart.component';

@Component({
  selector: 'chamber-history',
  templateUrl: './sensor-history.component.html',
  styleUrls: ['./sensor-history.component.css'],
  providers: []
})


export class SensorHistoryComponent implements OnInit {

  constructor() { }

  private startDate = new Date();
  private endDate = new Date();

  private sensor: Sensor;
  private sensors: Sensor[] = [];
  private sensorList = SensorList;

  // private test: Sensor ;
  // private testarray: Sensor[] =[{time: this.startDate, num: 1, temp: 2}];
  private tempHistory = [this.startDate, 1];


  ngOnInit() {
    console.log("HistoryComponent ngInit");
    this.updateChart(this.startDate, this.endDate, 1);
    this.startDate = this.endDate;
  }

  private onClickSensorNum(sensorNum: number) {
    this.updateChart(this.startDate, this.endDate, sensorNum);
    console.log(sensorNum);
  }

  private updateChart(startDate: Date, endDate: Date, sensorNum: number) {

  }

  private buildChartArray(sensorData: Sensor[]): Array<any> {
    return sensorData.map((data) => { return [new Date(data['time']).valueOf(), data['temp']]; });
  }
}
