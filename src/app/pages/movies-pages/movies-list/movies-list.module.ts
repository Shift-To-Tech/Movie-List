import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListRoutingModule } from './movies-list-routing.module';
import { MoviesListComponent } from './movies-list.component';
import { MatCardModule } from '@angular/material/card';
import { MoviesCardModule } from '../movies-card/movies-card.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MatCardModule,
    MoviesCardModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
})
export class MoviesListModule { }
