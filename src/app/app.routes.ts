import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { User } from './user/user.component';

export const routes: Routes = [
  { path: '', title: 'App Home Page', component: Home },
  { path: 'user', title: 'App User Page', component: User },
];
