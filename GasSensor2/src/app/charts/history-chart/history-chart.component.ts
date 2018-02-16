import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataPoint, SeriesOptions, ChartObject, Options } from 'highcharts';

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.css']
})

export class HistoryChartComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() historyChartData: number[][];
  private historyChartSeries: SeriesOptions;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    // this.chart.ref.redraw();
    this.chart.ref.series[0].setData(this.historyChartData);

  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.historyChartData);
    // this.tempChartSeries.data = this.tempChartData;
    if (this.chart.ref) this.chart.ref.series[0].setData(this.historyChartData);
    //this.showTemperatures(this.tempChartData);

  }

  private chart = new Chart({
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
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      },
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
    colors: ["rgba(148,202,255,1.0)", "#94CAFF", "#FF7070"],
    series: [
      { type: 'area', name: "Druck", color: "rgba(148,202,255,1.0)", data: [[], []] }
    ],
    xAxis: {
      type: 'datetime',
      lineColor: "#808080",
      tickColor: "#808080",
      gridLineColor: "#808080",
      gridLineWidth: 1,
      labels: {
        enabled: true,
        style: {
          color: "#ffffff"
        }
      },
      dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
      },
      title: {
        text: 'Time',
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
        text: 'Druck [bar]',
        align: 'high'
      }
    }
  })
}
