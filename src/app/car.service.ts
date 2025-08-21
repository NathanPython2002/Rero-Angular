import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //  makes this service available application-wide
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
