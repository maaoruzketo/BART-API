import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  departURL;
  location;
  locationData;
  addressData;
  addressURL;
  address;

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.departURL = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig='+this.folder+'&key=ZYR9-PG6X-9PMT-DWE9&json=y';
    this.addressURL = 'http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig='+this.folder+'&key=ZYR9-PG6X-9PMT-DWE9&json=y';
    this.addressData = this.http.get(this.addressURL);
    this.addressData.subscribe(
      x =>{
        this.address = x.root.stations.station;
        console.log(this.address);
      }
    );
    this.locationData = this.http.get(this.departURL);
    this.locationData.subscribe(
      x =>
      {
        this.location = x.root.station[0];
        console.log(this.location);
      }
    );
  }
}
