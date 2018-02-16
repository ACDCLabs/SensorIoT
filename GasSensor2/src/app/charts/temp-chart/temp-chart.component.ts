import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { ArduinoCloudService } from '../arduinoCloudService.service';
import { DecimalPipe } from '@angular/common';
import { Chart } from 'angular-highcharts';
import { DataPoint, SeriesOptions, ChartObject, Options } from 'highcharts';

@Component({
  selector: 'tempChart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css'] //,
  // providers: [ArduinoCloudService]
})

export class TempChartComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() tempChartData: number[][];

  private tempChartSeries: SeriesOptions;

  constructor() {
  }

  ngOnInit(): void {
    this.tempChartSeries = { "name": "Temperature", "color": "#F5DD45", data: this.tempChartData };
  }

  ngAfterViewInit(): void {

    //  this.chart.ref.redraw();
    this.chart.ref.series[0].setData(this.tempChartData);
    // this.chart.ref. xAxis.ke title.text='ddddd';
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (this.tempChartSeries) {
      // this.tempChartSeries.data = this.tempChartData;
      this.chart.ref.series[0].setData(this.tempChartData);
      // this.showTemperatures(this.tempChartData);
    }
  }

  public chart = new Chart({
    chart: {
      type: 'line',
      animation: false,
      zoomType: '',
      // backgroundColor: '#1f1f1f',
      backgroundColor: 'rgba(31,31,31,0.3)',
      // plotBackgroundColor: '#2f2f2f'
      plotBackgroundColor: 'rgba(47,47,47,0.5)'
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true
        }
      }
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    colors: ['rgba(148,202,255,1)', "#94CAFF", "#FF7070"],
    series: [
      { "name": "Temperature", "color": 'rgba(148,202,255,1)', data: [[], []] }
    ],
    xAxis: {
      lineColor: "#808080",
      tickColor: "#808080",
      gridLineColor: "#808080",
      gridLineWidth: 1,
      labels: {
        enabled: true,
        format: '{value:.1f}',
        style: {
          color: "#ffffff"
        }
      },
      title: {
        text: 'Pos [cm]',
        align: 'high'
      }
    },
    yAxis: {
      lineColor: "#808080",
      tickColor: "#ffffff",
      gridLineColor: "#808080",
      gridLineWidth: 1,
      labels: {
        enabled: true,
        format: '{value:.1f}',
        style: {
          color: "#ffffff"
        }
      },
      title: {
        text: 'Temp [°C]',
        align: 'high'
      }
    }
  });
}
