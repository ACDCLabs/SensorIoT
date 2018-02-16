
import { Injectable, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Observer }            from 'rxjs/Observer';
import 'rxjs/Rx';


// import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/interval';


const EventSource: any = window['EventSource'];
var esInitDict = { rejectUnauthorized: false };


@Injectable()
export class ParticleCloudService {

  private myparticlebaseUrl: string = 'https://api.particle.io/v1';
  private photonid: string = '260056001351353432393433';
  private photonaccesstoken: string = 'd4ba726eea679aaa23d03dc3edba6ece90d4f9d0';

  constructor(private http: Http, private zone: NgZone) {
    //this.http._defaultOptions.headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
  };


  // https://api.particle.io/v1/devices/260056001351353432393433/setMessage -d args="Nix" -d access_token=d4ba726eea679aaa23d03dc3edba6ece90d4f9d0
  sendText(mymessage: string): Promise<any> {
    var mycommand: string = 'setMessage';
    var body = { args: mymessage };;
    // body ='args: No Message';
    // body =JSON.stringify(mymessage);

    var headers = new Headers();
    headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
    //headers.append('Content-type', 'application/json');

    var myfullurl =
      this.myparticlebaseUrl
      + '/devices/' + this.photonid
      + '/' + mycommand;

    console.log(body);
    return this.http.post(myfullurl, body, { headers: headers }).toPromise()
      //return this.http.post(myfullurl,JSON.stringify(body)).toPromise()
      .then(
      response => response.json())
      .catch(this.handleError);
  }

  readAnalogValue(): Observable<Object> {
    return this.readIOValue('analog', null);
  }

  readDigitalValue(channel: number): Observable<Object> {
    return this.readIOValue('digital', channel);
  }


  private readIOValue(iotype: string, channel: number): Observable<Object> {
    var mycommand: string = iotype;

    var headers = new Headers();
    headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");

    if (channel !== null) mycommand += channel.toString();

    var myfullurl =
      this.myparticlebaseUrl
      + '/devices/' + this.photonid
      + '/' + mycommand;

    return this.http.get(myfullurl, { headers: headers })
      .map(
      response => response.json())
  }


  registerEventSourceListener(typefilter: string): Observable<any> {
    const essURL = this.myparticlebaseUrl
      + '/devices'
      + '/' + this.photonid
      + '/events'
      + '?'
      + 'access_token='
      + this.photonaccesstoken;

    // var particleEventSource = new EventSource(essURL);
    // particleEventSource.onmessage does not work

    var particleEventSource = new EventSource(essURL);
    console.log('connection to particle events: ' + essURL);
    particleEventSource.onerror = function(error: any) { console.log(error); }

    // this code works
    // particleEventSource.addEventListener('MotionDetected', (evt :any)  =>  {
    //   const eventdata = JSON.parse(evt.data);
    //   // const eventtype = JSON.parse(evt.type);
    //   console.log('Type: ' + typefilter + '  data: ' + eventdata.data);
    // },false);
    //
    //

    return new Observable((observer: Observer<any>) => {

      particleEventSource.addEventListener(typefilter, (evt: any) => {
        this.zone.run(() => {
          let event = {
            type : evt.type,
            data : new Date(JSON.parse(evt.data).data)
          }
          // console.log('Type: ' + typefilter + '  data: ' + eventdata);
          observer.next(event);
        });
      }, false);

      // return particleEventSource.close();
    });
    // return new Observable();
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    // return null;
  }
}
