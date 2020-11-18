import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCardComponent } from './movies-card.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [MoviesCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MoviesCardComponent
  ]
})
export class MoviesCardModule { }
