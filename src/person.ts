import {base} from './baseLib';

interface Person {
  id: number;
  firstName: string;
  lastName: string;

  fullName(): string;
}

export class MyPerson implements Person {
  id: number;
  firstName: string;
  lastName: string;

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

export class Passenger extends MyPerson {
  passengerStatus: string;
}

export class Pilot extends MyPerson {
  licenseNumber: string;
}

export abstract class AbstractAddress {
  id: number;
  street: string;
  zipCode: string;
  city: string;

  constructor(id: number) {
    this.id = id;
  }

  fullAddress() {
    return this.street + base.ZS + this.zipCode + ' ' + this.city;
  }

  abstract  toCSV(): string;
}

export class CompanyAddress extends AbstractAddress {
  companyName: string;

  toCSV() {
    return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
  }
}

export class PrivateAddress extends AbstractAddress {
  firstName: string;
  lastName: string;

  constructor() {
    super(0);
  }

  fullAddress() {
    return this.firstName + ' ' + this.lastName + base.ZS + super.fullAddress();
  }

  toCSV() {
    return `${this.id};${this.firstName};${this.lastName};${this.street};${this.zipCode};${this.city}`;
  }
}
