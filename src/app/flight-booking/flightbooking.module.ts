///<reference path="passenger-search/passenger-search.component.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { DateComponent} from '../date/date.component';
import { FlightBookingRouterModule } from './flightbooking.routes';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    FlightBookingRouterModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    DateComponent
  ],
  providers: [
  ],
  exports: [
    FlightSearchComponent,
    PassengerSearchComponent,
    SharedModule,
    DateComponent
  ]
})
export class FlightBookingModule { }
