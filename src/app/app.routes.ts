import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  /*{
    path: 'flight-search',
    component: FlightSearchComponent
  },*/
  /*{
    path: 'passenger-search',
    component: PassengerSearchComponent
  },*/
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
