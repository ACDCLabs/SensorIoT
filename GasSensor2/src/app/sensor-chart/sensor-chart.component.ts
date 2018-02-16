import { Component, OnInit } from '@angular/core';
import { ParticleCloudService } from '../particleCloudService.service';
import { Observable } from 'rxjs/Observable';
import { TempChartComponent } from '../charts/temp-chart/temp-chart.component';
import { SensorList } from '../models/sensor-list/sensor-list';

@Component({
  selector: 'sensor-chart',
  templateUrl: './sensor-chart.component.html',
  styleUrls: ['./sensor-chart.component.css'],
  providers: [ParticleCloudService]
})

export class SensorChartComponent implements OnInit {
  private temperatures: number[] =[];
  // private sensorPositions: number[];
  private temperatureCurve: number[][]= [[]];
  private sensorList = SensorList;

  constructor(private particleCloudService: ParticleCloudService) {
    this.pollTemperatures();
  }

  ngOnInit() {
    this.particleCloudService.readAnalogValue()
    .subscribe((value) => {
      this.temperatures = value["data"]["Temp"];

      // console.log(this.temperatureCurve);
    });
  }

  private pollTemperatures(time = 2000) {
    return Observable.interval(time)
      .switchMap(() => this.particleCloudService.readAnalogValue())
      .subscribe((value) => {
        this.temperatures = value["data"]["Temp"];
        // console.log(this.temperatureCurve);
      });
  }


}
