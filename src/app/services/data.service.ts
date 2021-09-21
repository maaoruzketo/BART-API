import { Injectable, SimpleChange } from '@angular/core';
import { Schedule } from '../interfaces/schedule';
import { HttpClient } from '@angular/common/http';
import { Depart } from '../interfaces/depart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  primaryURL = 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=ZYR9-PG6X-9PMT-DWE9&json=y';
  departureURL = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=';
  departureURL2 = '&key=ZYR9-PG6X-9PMT-DWE9&json=y';
  bartSheet;
  departSheet;
  station;
  scheduleInfo: Schedule[] = [];
  departInfo: Depart[] = [];
  constructor(private http: HttpClient) {
    //this.getData();
  }

  getURL(URL: string): Observable<any> {
    return this.http.get(URL);
  }

  getData() {
    // this.bartSheet = this.http.get(this.primaryURL);
    // 
    this.getURL(this.primaryURL).subscribe(
      x => {
        // console.log(x);
        for (let si of x.root.stations.station) {
          const info: Schedule = {
            name: si.name,
            abbr: si.abbr,
            address: si.address,
            city: si.city,
            state: si.state,
            zipcode: si.zipcode
          };
          this.scheduleInfo.push(info);
        }
        console.log(this.scheduleInfo);
      }
    );

    this.getURL(this.station).subscribe(
      x => {
        console.log(x);
        for (let di of x.root.station.etd.estimate) {
          let dInfo: Depart = {
            name: di.name,
            destination: di.destination,
            minutes: di.minutes,
            platform: di.platform,
            direction: di.direction,
            delay: di.delay
          };
          this.departInfo.push(dInfo);
        }
      }
    );
  }

  // getSchedule(ABBR){
  //  let fullURL = this.departureURL+ ABBR + this.departureURL2;
  //   this.getURL(fullURL).subscribe(
  //     di => {
  //       console.log(di);
  //         let dInfo: Depart = {
  //           name: di.root.station.name,
  //           destination: di.root.station.etd.destination,
  //           minutes: di.root.station.etd.estimate.minutes,
  //           platform: di.root.station.etd.estimate.platform,
  //           direction: di.root.station.etd.estimate.direction,
  //           delay: di.root.station.etd.estimate.delay
  //         }

  //         this.departInfo.push(dInfo);
  //         console.log(this.departInfo);
  //       }
  //   );

  // }

  bartURL(ABBR) {
    this.station = this.departureURL + ABBR + this.departureURL2;
    // console.log(station)
  }
}
