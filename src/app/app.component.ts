import { Component } from '@angular/core';
import { User } from './user.component';

@Component({
  selector: 'app-root',
  template: `<section><app-user /></section>`,
  imports: [User],
  standalone: true,
  styles: [
    `
      :host {
        color: #a144eb;
      }
    `,
  ],
})
export class AppComponent {
  city = 'San Francisco';
}
