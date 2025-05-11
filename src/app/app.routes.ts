import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'filme',
    loadComponent: () => import('./filme/filme.page').then( m => m.FilmePage)
  },
  {
    path: 'lista-filmes',
    loadComponent: () => import('./lista-filmes/lista-filmes.page').then( m => m.ListaFilmesPage)
  },
];
