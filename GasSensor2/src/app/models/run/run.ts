import { Component } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.html',
  styleUrls: ['./run.css']
})
export class Run  {

    time: Date;
    runnumber: number;
    rundescription: string;

  constructor() { }
}
