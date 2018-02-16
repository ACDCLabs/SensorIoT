import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'tempGauge',
  templateUrl: './tempGauge.component.html',
  styleUrls: ['./tempGauge.component.css'],
  providers: []
})

export class TempGaugeComponent implements OnInit {

  private gaugeType = "arch";
  private gaugeLabel = "Druck";
  private gaugeAppendText = "bar";
  private gaugeForegroundColor = "rgba(255,0,0,1)";
  private gaugeMin = 0;
  private gaugeMax = 6;

  @Input() gaugeTemp: number;


  constructor() {

    // this.drawTemperatureChart();

  }
  ngOnInit(): void {

  }

  public calcForegroundColor(temperature: number): string {
    let colorString: string = "";
    let red: number = 0;
    let green: number = 0;
    let blue: number = 0;
    red = Math.floor((temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) * 255);
    blue = Math.floor(255 - (temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) * 255);
    colorString = "rgba(" + red + ",0," + blue + ",1)";
    // console.log(colorString);
    return colorString;
  }
}
