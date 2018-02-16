import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  private gradientX2: number;
  private gradientY2: number;
  private temperatures: number[];
  //private yAxis  {x1: number =1};
  // private xAxis: Object;
  constructor() { this.gradientX2 = 0.0; this.gradientY2 = 1.0 }

  private svgContainer ={
    height: 400,
    width: 200
  };

  private heatMap ={
    height: 350,
    width: 150
  };

  private svgViewBox ={
    x: 0,
    y: 0,
    x1: this.svgContainer.width,
    y1: this.svgContainer.height
  };

  private svgViewBoxStr = 
  this.svgViewBox.x.toString() + ' ' +
  this.svgViewBox.y.toString() + ' ' +
  this.svgViewBox.x1.toString() + ' ' +
  this.svgViewBox.y1.toString();



  private yAxis = {
    x1: this.heatMap.width +10,
    y1: this.heatMap.height -10,
    x2: this.heatMap.width +10,
    y2: 10,
    nLabels: 5,
    labels: [60,20,10,0,-10],
    labelXpos:[this.heatMap.width+15,
               this.heatMap.width+15,
               this.heatMap.width+15,
               this.heatMap.width+15,
               this.heatMap.width+15],
    labelYpos:[0,0,0,0,0]
  };


  ngOnInit() {
    this.temperatures=[];
    let i=0;
    for (i=0;i<this.yAxis.labels.length;i++){
      this.yAxis.labelYpos[i] = Math.floor((this.yAxis.y1-this.yAxis.y2)/this.yAxis.nLabels*i+2*this.yAxis.y2);
    }
    console.log(this.yAxis);
  }

  setPosition(event: any): void {
     //console.log(event);
    this.gradientY2 = event.x / 100;
  }
}
