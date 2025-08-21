import { Component } from '@angular/core';
import { User } from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user></app-user>

      @if (isServerRunning) {
        <p>Yes, the server is running</p>
      } @else {
        <p>No, the server is not running</p>
      }
    </section>
  `,
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
  isServerRunning = true; // Boolean flag to indicate server status
}
