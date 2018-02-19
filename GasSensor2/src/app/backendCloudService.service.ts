
import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Sensor } from './models/sensor/sensor';
import { Run } from './models/run/run';

// import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/interval';


@Injectable()
export class BackendCloudService {

  private baseUrl: string = 'http://'+window.location.hostname+':4200/api';

  constructor(private http: Http, private zone: NgZone) {
    //this.http._defaultOptions.headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
    // console.log(window.location.hostname);
  };


  public getHistoricSensorValues(startDate: Date, endDate: Date, runNumber: number): Observable<Sensor[]> {
    //let startDate = new Date('2017-12-20');
    //let endDate = new Date('2017-12-25');
    var myfullurl =
      this.baseUrl + '/sensorvalues';
    let htmlBody = {
      start: this.toMySQLDateTimeString(startDate),
      end: this.toMySQLDateTimeString(endDate),
      runNumber: runNumber
    };
    // console.log(startDate);
    // console.log(myfullurl, htmlBody);
    return this.http.post(myfullurl, htmlBody)
      .map(
      response => response.json())
      .map(json => <Sensor[]>json["data"])
  }

  public storeSensorValue(sensor: Sensor, runNumber: number, runDescription: string): Observable<string>{
    var myfullurl =
      this.baseUrl + '/sensorvalue';
    let htmlBody = {
      num: sensor.num,
      pressure: sensor.pressure,
      runNumber: runNumber,
      runDescription: runDescription
    };
    // console.log(startDate);
    // console.log(myfullurl, htmlBody);
  return this.http.post(myfullurl, htmlBody)
      .map(
      response => response.json())
      .map(json => <string>json["data"])
  }

  public getRunList ():Observable<Run[]> {
    var myfullurl =
      this.baseUrl + '/runs';
      return this.http.get(myfullurl)
          .map(
          response => response.json())
          .map(json => <Run[]>json["data"])
  }

  public getLastRunNumber(): Observable<number>{
    var myfullurl =
      this.baseUrl + '/lastrunnumber';
      return this.http.get(myfullurl)
          .map(
          response => response.json())
          .map(json => <number>json["data"])
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    // return null;
  }

  private toMySQLDateTimeString(dateTime: Date): String {
    let date: String  =
      dateTime.getFullYear().toString() + '-' +
      (dateTime.getMonth()+1).toString() + '-' +
      dateTime.getDate ().toString();
    let time: String = dateTime.toLocaleTimeString();

    return (date+' '+time);

  }
}
