import {FlightSearchComponent} from './flight-search/flight-search.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {FlightCardComponent} from './flight-card/flight-card.component';
import {DateComponent} from './date/date.component';
import {CityPipe} from './pipe-flightCity/flight-city.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightCardComponent,
    DateComponent,
    CityPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
