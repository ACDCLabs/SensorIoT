import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { ArduinoCloudService } from '../arduinoCloudService.service';
import { DecimalPipe } from '@angular/common';
import { Chart } from 'angular-highcharts';
import { DataPoint, SeriesOptions, ChartObject, Options } from 'highcharts';

@Component({
  selector: 'tempProfileChart',
  templateUrl: './temp-profile-chart.component.html',
  styleUrls: ['./temp-profile-chart.component.css'] //,
  // providers: [ArduinoCloudService]
})

export class TempProfileChartComponent implements OnInit, AfterViewInit, OnChanges {

  // @Input() tempChartData: number[][];
  @Input() tempProfileSeries: SeriesOptions[];

  // private tempChartSeries: SeriesOptions[];
  // private tempChartData: [[number, number]] = [[0, 0]];
  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //  this.chart.ref.redraw();
    if (this.chart) {
      let i = 0;
      let l = this.tempProfileSeries.length;
      for (i = 0; i < l; i++) {
        this.chart.addSerie(this.tempProfileSeries[i]);
        // console.log(this.tempProfileSeries[i]);
      }
      // this.chart.ref. xAxis.ke title.text='ddddd';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (this.chart.ref) {
      // this.tempChartSeries.data = this.tempChartData;
      let i = 0;
      let l = this.tempProfileSeries.length;
      for (i = 0; i < l; i++) {
        if (this.chart.ref.series[i])
          this.chart.ref.series[i].setData(this.tempProfileSeries[i].data);
      }
      // this.showTemperatures(this.tempChartData);
    }
  }

  public chart = new Chart({
    chart: {
      // type: 'area',
      animation: false,
      zoomType: '',
      // backgroundColor: '#1f1f1f',
      backgroundColor: 'rgba(31,31,31,0.3)',
      // plotBackgroundColor: '#2f2f2f'
      plotBackgroundColor: 'rgba(47,47,47,0.5)'
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(148,202,255,0.5'],
            [1, 'rgba(47,47,47,0.5)']
          ]
        },
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
    colors: [],
    series: [],
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
        text: 'Temp [°C]',
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
        text: 'Pos [cm]',
        align: 'high'
      }
    }
  });
}
