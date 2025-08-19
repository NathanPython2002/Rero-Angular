import { Component } from '@angular/core';
import { User } from './user.component';
import { Child } from './child.component';
import { Comments } from './comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User, Child, Comments],
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
    <app-child (addItemEvent)="addItem($event)"></app-child>

    <article>
      <p>
        Angular is my favorite framework, and this is why. Angular has the
        coolest deferrable view feature that makes defer loading content the
        easiest and most ergonomic it could possibly be. The Angular community
        is also filled with amazing contributors and experts that create
        excellent content. The community is welcoming and friendly, and it
        really is the best community out there.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers
        the best developer experience I've ever had. I love that the Angular
        team puts their developers first and takes care to make us very happy.
        They genuinely want Angular to be the best framework it can be, and
        they're doing such an amazing job at it, too. This statement comes from
        my heart and is not at all copied and pasted. In fact, I think I'll say
        these exact same things again a few times.
      </p>
      <p>
        Angular is my favorite framework, and this is why. Angular has the
        coolest deferrable view feature that makes defer loading content the
        easiest and most ergonomic it could possibly be. The Angular community
        is also filled with amazing contributors and experts that create
        excellent content. The community is welcoming and friendly, and it
        really is the best community out there.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers
        the best developer experience I've ever had. I love that the Angular
        team puts their developers first and takes care to make us very happy.
        They genuinely want Angular to be the best framework it can be, and
        they're doing such an amazing job at it, too. This statement comes from
        my heart and is not at all copied and pasted. In fact, I think I'll say
        these exact same things again a few times.
      </p>
      <p>
        Angular is my favorite framework, and this is why. Angular has the
        coolest deferrable view feature that makes defer loading content the
        easiest and most ergonomic it could possibly be. The Angular community
        is also filled with amazing contributors and experts that create
        excellent content. The community is welcoming and friendly, and it
        really is the best community out there.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers
        the best developer experience I've ever had. I love that the Angular
        team puts their developers first and takes care to make us very happy.
        They genuinely want Angular to be the best framework it can be, and
        they're doing such an amazing job at it, too. This statement comes from
        my heart and is not at all copied and pasted.
      </p>
    </article>

    @defer (on viewport) {
    <app-comments></app-comments>
    } @placeholder {
    <p>Future comments</p>
    } @loading (minimum 2s) {
    <p>Loading comments...</p>
    }
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
  city = 'San Francisco';
  isServerRunning = true;

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  isEditable = true;
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(event: string) {
    this.users.push({ id: this.users.length, name: event });
  }
}
