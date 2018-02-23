import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {FlightBookingModule} from './flight-booking/flightbooking.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlightBookingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
