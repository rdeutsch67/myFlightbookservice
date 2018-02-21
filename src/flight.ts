// import './math_lib';

export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;

  distance?: number;
  calcPrice?(): number;
  calcDiv?(): number;
}

export class ScheduledFlight implements Flight {

  id: number;
  from: string;
  to: string;
  date: string;

  distance: number;

  calcPrice() {
    return this.distance / 3;
  }

  get unixDate() {
    return new Date(this.date).getTime();
  }

  set unixDate(time: number) {
    let date = new Date(time);
    this.date = date.toISOString();
  }
}

function div(a: number, b: number): number {
  if ( b == 0) {
    throw new Error('Division durch 0 nicht erlaubt!');
  }
  return a / b;
}


export class CharterFlight implements Flight {
  id: number;
  from: string;
  to: string;
  date: string;

  distance: number;

  calcPrice() {
    return this.distance / 2;
  }

  calcDiv() {
    try {
      return div(this.distance, 1);
    }
    catch(error) {
      console.log('Fehler', error);
    }
  }
}

export class FlightInvoice<T extends Flight> {
  subject: T;
  amount: number;

  toString() {
    return 'Flight: ' + this.subject.id  + ': Betrag: ' + this.amount;
  }
}
