import { Component } from '@angular/core';
import { Child } from '../child.component';
import { Comments } from '../comments.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Child, Comments, FormsModule],
  template: `
    <h1>Welcome to the user page!</h1>

    <!-- Vérification si le serveur tourne -->
    <p *ngIf="isServerRunning; else serverStopped">
      Yes, the server is running
    </p>
    <ng-template #serverStopped
      ><p>No, the server is not running</p></ng-template
    >

    <h2>Users list :</h2>
    <div *ngFor="let user of users; trackBy: trackById">
      <p>{{ user.name }}</p>
    </div>

    <p>{{ message }}</p>

    <div [contentEditable]="isEditable">This text can be edited</div>

    <app-child (addItemEvent)="addItem($event)"></app-child>

    <!-- Article complet répété -->
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

    <!-- Formulaire pour récupérer le framework préféré -->
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>

    <p>Your favorite framework is: {{ favoriteFramework }}</p>
    <button (click)="showFramework()">Show Framework</button>

    <!-- Chargement différé du composant Comments -->
    <ng-container *ngIf="commentsVisible; else placeholder">
      <app-comments></app-comments>
    </ng-container>
    <ng-template #placeholder>
      <p>Future comments</p>
    </ng-template>
  `,
})
export class User {
  isServerRunning = true;
  isEditable = true;
  message = '';
  favoriteFramework = '';
  commentsVisible = false;

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  showFramework() {
    alert(this.favoriteFramework);
  }

  addItem(event: string) {
    this.users.push({ id: this.users.length, name: event });
  }

  trackById(index: number, user: any) {
    return user.id;
  }

  loadComments() {
    this.commentsVisible = true;
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
