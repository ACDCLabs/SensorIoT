import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.html',
  styleUrls: ['./sensor.css']
})
export class Sensor  {

    time: Date;
    num: number;
    pressure: number;
    runNumber: number;
    runDescription: string;
    message: string;

  constructor() { }
}
