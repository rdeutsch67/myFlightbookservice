import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent} from '../date/date.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    DateComponent
  ],
  providers: [
  ],
  exports: [
    FlightSearchComponent,
    SharedModule,
    DateComponent
  ]
})
export class FlightBookingModule { }
