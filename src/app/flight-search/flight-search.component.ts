import {Flight} from '../entities/flight';
import {Component, NgModule} from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})

export class FlightSearchComponent {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  public myDate: string = (new Date()).toISOString();

  constructor(private http: Http) {
  }

  // function showResponse(resp: Response){
  //   cosole.debug('Status-Code', resp.status);
  //   cosole.debug('Status-Text', resp.statusText);
  //   cosole.debug('Content-Type', resp.headers.get('Content-Type'));
  //   cosole.debug('Alle Header-Namen', resp.headers.keys();
  //   cosole.debug('Nutzdaten als String', resp.text());
  // }

  search() {
    const url = 'http://www.angular-akademie.com/api/flight';

    const headers = new Headers();
    headers.set('Accept', 'text/json');

    const search = new URLSearchParams();
    search.set('from', this.from);
    search.set('to', this.to);

    this.http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => {
          console.error(err);
        }
      );
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }
}
