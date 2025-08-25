import { Component } from '@angular/core';
import { User } from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">

      <app-user name="Simran"></app-user>


      @if (isServerRunning) {
      <p>Yes, the server is running</p>
      } @else {
      <p>No, the server is not running</p>
      }

      <h2>Users list :</h2>
      @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
      }

      <p>{{ message }}</p>
    </section>


    <div [contentEditable]="isEditable">This text can be edited</div>

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

  isEditable = true; // Boolean flag to indicate if the component is editable
  message = ''; // Message to display on mouseover

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
