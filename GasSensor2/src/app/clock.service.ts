import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClockService {
  private clock: Observable<Date>;
  private stopWatch: Observable<number>;
  private stopWatchStart: number;
  private stopWatchRunning: boolean = false;
  private tickCounter: number =0;
  constructor() {

    this.clock = Observable.interval(1000).map(tick => new Date());

  }

  getClock(): Observable<Date> {
    return this.clock;
  }

  startStopWatch(): void {
    this.stopWatchRunning = true;
  }

  stopStopWatch(): void {
    this.stopWatchRunning = false;
  }

  createStopWatch(): Observable<number> {
    this.stopWatchStart = new Date().valueOf();
    return this.stopWatch =
      Observable.interval(1000).map(tick => this.ticker());
  }

  ticker(): number {
     if (this.stopWatchRunning) this.tickCounter++;
    return  1000* this.tickCounter;
  }
}
