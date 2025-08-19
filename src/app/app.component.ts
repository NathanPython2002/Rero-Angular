import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink],
  template: `
    <nav>
      <a [routerLink]="['/']">Home</a> |
      <a [routerLink]="['/user']">User</a>
    </nav>

    <router-outlet></router-outlet>

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
export class AppComponent {}
