import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor-descriptor',
  templateUrl: './sensor-descriptor.html',
  styleUrls: ['./sensor-descriptor.css']
})
export class SensorDescriptor {

  public index: number;
  public position: number;
  public description: String;

  constructor() { }


}
