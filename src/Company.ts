import { Mappable } from './interfaces/mappable.interface';
import faker from 'faker';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name is: ${this.name}</h1>
        <h3>Company catchphrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}