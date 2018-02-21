import { Flight, CharterFlight} from './flight';

class Invoice<T> {
  subject: T;
  price: number;

  toString() {
    let id = '';
    return `${id}: ${this.price}`;
  }
}

// let inv = new Invoice();
// inv.price = 200;
// //console.log('Invoice: '+inv.toString());

class FlightInvoice<T extends Flight> {
  subject: T;
  amount: number;
  diff: number;


  toString() {
    return `Flight ${this.subject.id}: ${this.amount}`;
  }
}
//
// let charterFlightToCharge = new CharterFlight();
// charterFlightToCharge.id = 23;
// charterFlightToCharge.from = 'Graz';
// charterFlightToCharge.to = 'Hamburg';
// charterFlightToCharge.distance = 1000;
//
// let charterInvoice = new FlightInvoice<CharterFlight>();
// charterInvoice.subject = charterFlightToCharge;
// charterInvoice.amount = charterFlightToCharge.calcPrice() * 1.50;
// charterInvoice.diff = charterFlightToCharge.calcDiv();
//
//
// //console.log('charterInvoice: ', charterInvoice.toString());
