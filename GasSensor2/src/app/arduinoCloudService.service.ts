
import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Sensor } from './models/sensor/sensor';

// import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/interval';


@Injectable()
export class ArduinoCloudService {

  private baseUrl: string = 'http://'+window.location.hostname+':4080/api';

  constructor(private http: Http, private zone: NgZone) {
    //this.http._defaultOptions.headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
    // console.log(window.location.hostname);
  };

  public readAllTemperatures(): Observable<Sensor> {
    var myfullurl =
      this.baseUrl
      + '/CurrentTemperatures';

    return this.http.get(myfullurl)
      .map(
      response => <Sensor>response.json())
  }

  public getHistoricTemperatures(startDate: Date, endDate: Date, sensorNumber: number): Observable<Sensor[]> {
    //let startDate = new Date('2017-12-20');
    //let endDate = new Date('2017-12-25');
    var myfullurl =
      this.baseUrl + '/temperatures';
    let htmlBody = {
      start: this.toMySQLDateTimeString(startDate),
      end: this.toMySQLDateTimeString(endDate),
      num: sensorNumber
    };
    // console.log(startDate);
    // console.log(myfullurl, htmlBody);
    return this.http.post(myfullurl, htmlBody)
      .map(
      response => response.json())
      .map(json => <Sensor[]>json["data"])
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
