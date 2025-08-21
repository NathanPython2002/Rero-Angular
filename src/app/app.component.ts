import { Component, inject } from '@angular/core';
import { NgOptimizedImage, LowerCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink, LowerCasePipe],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/user">User</a>
    </nav>

    <router-outlet></router-outlet>

    <p>Car Listing: {{ display }}</p>
    <p>Username lowercased: {{ username | lowercase }}</p>

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
}
