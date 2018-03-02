import { Component, OnInit } from '@angular/core';
import { ParticleCloudService } from '../particleCloudService.service';
import { Observable } from 'rxjs/Observable';
import { Sensor } from '../models/sensor/sensor';
import { SensorDescriptor } from '../models/sensor-descriptor/sensor-descriptor';
import { SensorList } from '../models/sensor-list/sensor-list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sensor-eventlistComponent',
  templateUrl: './sensor-eventlist.component.html',
  styleUrls: ['./sensor-eventlist.component.css'],
  providers: [
    ParticleCloudService,

  ]
})


export class SensorEventlistComponent implements OnInit {

  private photonEventList: Array<Object> = [];

  constructor(private particleCloudService: ParticleCloudService) {
  };

  ngOnInit() {
    var essObservable = this.particleCloudService.registerEventSourceListener('PressureAlarm');

    essObservable.subscribe({
      next: (photonEvent) => {
        console.log(photonEvent);
        this.photonEventList.push(photonEvent);
      }
    });
  }
}
