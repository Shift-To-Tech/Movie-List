import { Component, OnInit,Input } from '@angular/core';
import { Movie } from 'src/app/_lib/interfaces';
@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {

  @Input() movies = {} as Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
