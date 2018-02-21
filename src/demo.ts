import { Flightmanager } from './flight-manager';
import { Flight, ScheduledFlight, CharterFlight } from './flight';

function showFlight(f:Flight): void {
  console.log('----- Flight -----');
  console.log('id', f.id);
  console.log('date', f.from);
  console.log('date', f.to);
  console.log('date', f.date);
}

let flights: Array<Flight> = [
  {
    id: 17,
    from: 'Graz',
    to: 'Hamburg',
    date: '2017-02-27'
  },
  {
    id: 18,
    from: 'Graz',
    to: 'Hamburg',
    date: '2017-02-27'
  },
  {
    id: 19,
    from: 'Graz',
    to: 'Mallorca',
    date: '2017-02-27'
  },
  {
    id: 20,
    from: 'Graz',
    to: 'Hamburg',
    date: '2017-02-27'
  }
];


let fm = new Flightmanager(flights);
let result1 = fm.search('Graz', 'Hamburg');

console.log('*****************************');
console.log('--> search');
for(let f of result1) {
  console.log('flight', f);
  showFlight(f);
}

console.log('*****************************');
console.log('--> search2');
let result2 = fm.search2('Graz', 'Hamburg');
for(let f of result2) {
  console.log('flight', f);
  showFlight(f);
}

console.log('*****************************');
console.log('--> search3');
let result3 = fm.search3('Graz', 'Hamburg');
for(let f of result3) {
  showFlight(f);
  console.log('flight', f);
}

console.log('*****************************');
console.log('--> ScheduledFlight');
let f2: Flight = new ScheduledFlight();
f2.distance = 1000;
console.log('calcPrice: ', f2.calcPrice())

console.log('*****************************');
console.log('--> CharterFlight');
f2 = new CharterFlight();
f2.distance = 1000;
console.log('calcPrice: ', f2.calcPrice())



