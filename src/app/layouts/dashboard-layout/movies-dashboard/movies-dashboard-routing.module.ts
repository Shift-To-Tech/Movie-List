import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDashboardComponent } from './movies-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full',
      },
      {
        path: 'movies',
        loadChildren: () => import('../../../pages/movies-pages/movies-list/movies-list.module').then(m => m.MoviesListModule),
      },
      {
        path: '**',
        redirectTo: 'movies',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesDashboardRoutingModule { }
