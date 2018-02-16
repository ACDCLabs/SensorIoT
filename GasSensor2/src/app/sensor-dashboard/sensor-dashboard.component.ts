import { TempGaugeComponent } from '../charts/tempGauge/tempGauge.component';
import { Component, OnInit } from '@angular/core';
import { ParticleCloudService } from '../particleCloudService.service';
import { BackendCloudService } from '../backendCloudService.service';
import { Observable } from 'rxjs/Observable';
import { Sensor } from '../models/sensor/sensor';
import { SensorDescriptor } from '../models/sensor-descriptor/sensor-descriptor';
import { SensorList } from '../models/sensor-list/sensor-list';
import { ClockService} from '../clock.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sensor-dashboardComponent',
  templateUrl: './sensor-dashboard.component.html',
  styleUrls: ['./sensor-dashboard.component.css'],
  providers: [
    ParticleCloudService,
    BackendCloudService,
    ClockService
  ]
})

export class SensorDashboardComponent implements OnInit {

  private pressure: number;
  private pressureValues: number[][];
  private sensor: Sensor;
  private sensors: Sensor[] = [];
  private sensorList = SensorList;
  private maxArrayLength: number = 5;
  //private time: Date;
  private stopWatch: Date;
  private dataIsRecording: boolean = false;

  constructor(private particleCloudService: ParticleCloudService,
              private backendCloudService: BackendCloudService,
              private clockService: ClockService) {
    this.sensor = new Sensor;
  //  this.pressureValues = new Array;
  }

  ngOnInit() {
    this.particleCloudService.readAnalogValue()
    .subscribe((value) => {
      this.sensor.value = this.particleCloudService.adcValueToPressure(value["result"]);
    })
    this.pressureValues = [[new Date().valueOf(),this.sensor.value]];
    // console.log("dashboardComponent.ngOninit: " + this.temperatureCurve);
    // setInterval(() => { this.createRandomData(); }, 1000 );
    this.clockService.createStopWatch().subscribe(stopWatchMillis => this.stopWatch = new Date(stopWatchMillis));
    this.clockService.startStopWatch();
    this.pollAnalogValues();
  }

  createRandomData(){
    // array.push() does not work since angular does not detetct the change in the Array
    // we need to thange the reference of the array
    this.pressureValues =[...this.pressureValues, [new Date().valueOf(),Math.random()*100]];
  };

  startRun(): boolean {
    this.clockService.startStopWatch();
    this.dataIsRecording = true;
    console.log("start recording");
    // return false is needed to prevent tor bowser from posting the form and trigger a relaoad of the page
    return false;
  }

  stopRun(): boolean {
    this.clockService.stopStopWatch();
    this.dataIsRecording = false;
    console.log("stop recording");
    // return false is needed to prevent tor bowser from posting the form and trigger a relaoad of the page
    return false;
  }


  pollAnalogValues(time = 2000) {
    return Observable.interval(time)
      .switchMap(() => this.particleCloudService.readAnalogValue())
      .subscribe((value) => {
        this.sensor.value = this.particleCloudService.adcValueToPressure(value["result"]);
        this.pressure = this.sensor.value;
        this.sensor.num =1;
        this.sensor.time = new Date();
        this.backendCloudService.storeSensorValue(this.sensor,1,"MyMessage").subscribe();
        if (this.pressureValues.length > this.maxArrayLength ) this.pressureValues.shift();
        this.pressureValues = [...this.pressureValues, [this.sensor.time.valueOf(),this.sensor.value]];
        // this.setValue(this.sensor.value);
        // console.log("values", this.pressureValues);
      });
  }

};
