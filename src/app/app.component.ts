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

      <h2>Liste des utilisateurs :</h2>
      @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
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

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
