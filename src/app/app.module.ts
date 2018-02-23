///<reference path="app.routes.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flightbooking.module';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.routes';
import {FlightSearchComponent} from './flight-booking/flight-search/flight-search.component';
import {DateComponent} from './date/date.component';
import {HomeComponent} from './home/home.component';
import {FlightBookingComponent} from './flight-booking/flight-booking/flight-booking.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlightBookingModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FlightBookingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
