import { TempGaugeComponent } from '../charts/tempGauge/tempGauge.component';
import { Component, OnInit } from '@angular/core';
import { ParticleCloudService } from '../particleCloudService.service';
import { BackendCloudService } from '../backendCloudService.service';
import { Observable } from 'rxjs/Observable';
import { Sensor } from '../models/sensor/sensor';
import { SensorDescriptor } from '../models/sensor-descriptor/sensor-descriptor';
import { SensorList } from '../models/sensor-list/sensor-list';
import { ClockService } from '../clock.service';
import { DatePipe } from '@angular/common';
import { Run } from '../models/run/run';

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

  // private pressure: number;
  private pressureValues: number[][];
  private sensor: Sensor;
  private sensors: Sensor[] = [];
  private sensorList = SensorList;
  private run: Run;
  // private lastRunNumber: number =0;
  private maxArrayLength: number = 5;
  //private time: Date;
  private stopWatch: Date;
  private dataIsRecording: boolean = false;
  private serverIPAddress: string;
  private messageToSend: string;
  private pressureLimit: number;
  private pressureLimitLine: number[][];

  constructor(private particleCloudService: ParticleCloudService,
    private backendCloudService: BackendCloudService,
    private clockService: ClockService) {
    this.sensor = new Sensor;
    this.run = new Run;
    //  this.pressureValues = new Array;
  }

  ngOnInit() {
    this.pressureLimit = 1.02;
    this.particleCloudService.readAnalogValue()
      .subscribe((value) => {
        this.sensor.pressure = this.particleCloudService.adcValueToPressure(value["result"]);
      })

    this.backendCloudService.getLastRunNumber().subscribe((num) => {
      this.run.runnumber = num + 1;
    });
    this.pressureValues = [[new Date().valueOf(), this.sensor.pressure]];
    this.pressureLimitLine = this.createLimitArray();
    // console.log("dashboardComponent.ngOninit: " + this.temperatureCurve);
    // setInterval(() => { this.createRandomData(); }, 1000);
    this.clockService.createStopWatch().subscribe(stopWatchMillis => this.stopWatch = new Date(stopWatchMillis));
    this.clockService.stopStopWatch();
    this.pollAnalogValues();
    this.backendCloudService.getServerIPAddress().subscribe((ipAddress) => this.serverIPAddress = ipAddress);
  }

  createRandomData() {
    // array.push() does not work since angular does not detetct the change in the Array
    // we need to thange the reference of the array
    this.sensor.pressure = Math.random() * 2;
    this.sensor.num = 1;

    this.pressureValues = [...this.pressureValues, [new Date().valueOf(), this.sensor.pressure]];
    if (this.dataIsRecording)
      this.backendCloudService.storeSensorValue(this.sensor, this.run.runnumber, this.run.rundescription).subscribe();

    if (this.pressureValues.length > this.maxArrayLength) this.pressureValues.shift();
    this.pressureLimitLine = this.createLimitArray();
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

  sendMessage(): boolean {
    this.particleCloudService.sendText(this.messageToSend);
    console.log("sending " + this.messageToSend);
    return false;
  }

  beepDevice(): boolean {
    let length = 1000; // duration in miliseconds
    this.particleCloudService.buzz(length);
    console.log("sending " + this.messageToSend);
    return false;
  }


  pressureLimitChange(event): boolean {
    let limit = this.particleCloudService.pressureValueToAdc(event); // limit in bar
    this.particleCloudService.setAlarm(limit);
    // console.log(event);
    console.log(this.pressureLimit);
    return false;
  }


  pollAnalogValues(time = 2000) {
    return Observable.interval(time)
      .switchMap(() => this.particleCloudService.readAnalogValue())
      .subscribe((value) => {
        this.sensor.pressure = this.particleCloudService.adcValueToPressure(value["result"]);
        this.sensor.num = 1;
        this.sensor.time = new Date();
        if (this.dataIsRecording)
          this.backendCloudService.storeSensorValue(this.sensor, this.run.runnumber, this.run.rundescription).subscribe();
        if (this.pressureValues.length > this.maxArrayLength) this.pressureValues.shift();
        this.pressureValues = [...this.pressureValues, [this.sensor.time.valueOf(), this.sensor.pressure]];
        this.pressureLimitLine = this.createLimitArray();
        // this.setValue(this.sensor.value);
        // console.log("values", this.pressureValues);
      });
  }

  createLimitArray(): number[][] {
    let limitArray: number[][];
    var values = this.pressureValues.map(function(elt) { return elt[0]; });
    var max = Math.max.apply(null, values);
    var min = Math.min.apply(null, values);
    limitArray =[[min,this.pressureLimit],[max, this.pressureLimit]];
    // console.log(limitArray);
    return limitArray;
  }

};
