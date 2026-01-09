import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  },
  {
    path: 'shows',
    loadComponent: () => import('./components/my-shows/my-shows').then(m => m.MyShows)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
