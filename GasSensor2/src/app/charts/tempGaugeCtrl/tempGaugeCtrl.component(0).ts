import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArduinoCloudService } from '../../arduinoCloudService.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'tempGaugeCtrl',
  templateUrl: './tempGaugeCtrl.component.html',
  styleUrls: ['./tempGaugeCtrl.component.css'],
  providers: [ArduinoCloudService]
})

export class TempGaugeCtrlComponent implements OnInit {

  public gaugeType = "arch";
  public gaugeLabel = "Temp";
  public gaugeAppendText = "°C";
  @Input()  gaugeTemp : number;
  public setTemperature: number;
  private maxSetTemperature: number = 60;
  private minSetTemperature: number =-50;
  private gaugeMin = -40;
  private gaugeMax = 60;

  constructor(private arduinoCloudService: ArduinoCloudService) {

    // this.drawTemperatureChart();

  }
  ngOnInit(): void  {
    this.setTemperature = 30;
    this.gaugeTemp = this.setTemperature;
  }

  public gaugeControllerIncrease(data): void {

    if (this.setTemperature < this.maxSetTemperature) this.setTemperature++;
    this.gaugeTemp = this.setTemperature;
  }

  public gaugeControllerDecrease(data): void {

    if (this.setTemperature > this.minSetTemperature) this.setTemperature--;
    this.gaugeTemp = this.setTemperature;
  }

  public calcForegroundColor(temperature: number): string{
    let colorString: string = "";
    let red: number = 0;
    let green: number =0;
    let blue: number =0;
    red = Math.floor((temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) *255);
    blue = Math.floor(255 -(temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) *255);
    colorString = "rgba("+red+",0,"+blue+",1)";
    // console.log(colorString);
    return colorString;
  }
}
