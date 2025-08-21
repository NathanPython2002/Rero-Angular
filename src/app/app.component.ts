import { Component, inject } from '@angular/core';
import {
  NgOptimizedImage,
  LowerCasePipe,
  DecimalPipe,
  DatePipe,
  CurrencyPipe,
} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from './car.service';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage, // For optimized image loading
    RouterOutlet, // For routing
    RouterLink, // For router links
    LowerCasePipe, // For lowercasing text
    DecimalPipe, // For formatting numbers
    DatePipe, // For formatting dates
    CurrencyPipe, // For formatting currency
    ReversePipe, // Custom reverse pipe
  ],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/user">User</a>
    </nav>

    <router-outlet></router-outlet>

    <p>Car Listing: {{ display }}</p>
    <p>Username lowercased: {{ username | lowercase }}</p>
    <p>Reverse Machine: {{ word | reverse }}</p>

    <h2>Pipes formatting demo</h2>
    <ul>
      <li>Number with "decimal": {{ num | number : '3.2-2' }}</li>
      <li>Date with "date": {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency": {{ cost | currency }}</li>
    </ul>

    <img ngSrc="assets/logo.svg" alt="Angular logo" width="32" height="32" />
  `,
  styles: [
    `
      :host {
        color: #a144eb;
      }
    `,
  ],
})
export class AppComponent {
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');

  username = 'NathanPython2002';
  word = 'AngularRocks';

  // Example data for pipes
  num = 7.234;
  birthday = new Date(1995, 6, 15);
  cost = 1234.56;
}
