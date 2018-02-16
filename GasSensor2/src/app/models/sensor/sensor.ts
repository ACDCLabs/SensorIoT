import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.html',
  styleUrls: ['./sensor.css']
})
export class Sensor  {

    time: Date;
    num: number;
    value: number;

  constructor() { }
}
