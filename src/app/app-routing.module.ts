import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app'
  },
  {
    path: 'app',
    loadChildren: () => import('./layouts/dashboard-layout/movies-dashboard/movies-dashboard.module').then(m => m.MoviesDashboardModule),
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];

export const AppRoutingModule: any = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled'
});
