import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesDashboardRoutingModule } from './movies-dashboard-routing.module';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { SharedModule } from 'src/app/_shared/shared.module';




@NgModule({
  declarations: [MoviesDashboardComponent],
  imports: [
    CommonModule,
    MoviesDashboardRoutingModule,
    SharedModule,
  ]
})
export class MoviesDashboardModule { }
