import { Mappable } from './interfaces/mappable.interface';
import faker from 'faker';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>User name is: ${this.name}</h1>
      </div>
    `
  }
}