import { base } from './baseLib';
import { Flight, ScheduledFlight, CharterFlight, FlightInvoice} from './flight';
import {AbstractAddress, PrivateAddress, CompanyAddress, MyPerson, Passenger, Pilot} from './person';
import {Flightmanager} from './flight-manager';

let scheduledFlight: Flight = new ScheduledFlight();
scheduledFlight.distance = 1000;

let charterFlight: Flight = new CharterFlight();
charterFlight.distance = 1000;

let flights: Flight[] = [scheduledFlight, charterFlight];

console.log('imperative variante');

for(let f of flights) {
  if (f.calcPrice) {
    console.log('Preis: ',f.calcPrice());
  }
}

let person1: MyPerson = new Passenger();
person1.firstName = 'Max';
person1.lastName = 'Muster';

let person1AsPassenger = person1 as Passenger;
person1AsPassenger.passengerStatus = 'on Board';

let person2: MyPerson = new Pilot();
person2.firstName = 'Jens';
person2.lastName = 'Wolkenmeyer';

let isPerson = person1 instanceof MyPerson;
let isPassenger = person1 instanceof Passenger;
let isPilot = person1 instanceof Pilot;

console.log('isPerson', isPerson);
console.log('isPassenger', isPassenger);
console.log('isPilot', isPilot);

let a1 = new CompanyAddress(1);
a1.id = 1;
a1.city = 'Graz';
a1.street = 'Gehweg 3';
a1.zipCode = '8010';
a1.city = 'Graz';
a1.companyName = 'Guckmal GmbH';

console.log('a1 as csv' + base.ZS + a1.toCSV());
console.log('a1 as full Address' + base.ZS + a1.fullAddress());

let a2 = new PrivateAddress();
a2.id = 1;
a2.firstName = 'Paul';
a2.lastName = 'Gaultier';
a2.street = 'Avenue des Champs-Élysées';
a2.zipCode = '75000';
a2.city = 'Paris';
console.log('a2 as csv' + base.ZS + a2.toCSV());
console.log('a2 as full Address' + base.ZS + a2.fullAddress());

let nextFlight = new ScheduledFlight();
nextFlight.date = '2018-12-24';
console.log('unix-date', nextFlight.unixDate);
nextFlight.unixDate = 4711;
console.log('unix-date', nextFlight.date);

// Seite 34
let charterFlightToCharge = new CharterFlight();
charterFlightToCharge.id   = 4711;
charterFlightToCharge.from = 'Graz';
charterFlightToCharge.to   = 'Hamburg';
charterFlightToCharge.distance = 1000;

let charterInvoice = new FlightInvoice<CharterFlight>();
charterInvoice.subject = charterFlightToCharge;
charterInvoice.amount  = charterFlightToCharge.calcPrice() * 1.50;

console.log('charterInvoice',  charterInvoice.toString());
console.log('charterInvoice.subject.from',  charterInvoice.subject.from);

//Seite 40
let fm = new Flightmanager([]);
fm
  .searchFromWebWithPromises('Hamburg', 'Graz')
  .then((flights: Flight[]) => {
    console.debug('Flights', flights);
    return fm.searchFromWebWithPromises('Graz', 'Hamburg');
  })
  .then((flights: Flight[]) => {
    console.debug('Return Flights', flights);
  })
  .catch((err) => {
    console.error('Flights', err);
  })




