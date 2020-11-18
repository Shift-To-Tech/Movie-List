import { Component, OnInit } from '@angular/core';
import { ApiResponse, Movie } from 'src/app/_lib/interfaces';
import { UserApi } from '../../../_core/services/user.api';
import { NotificationService } from '../../../_core/services/notification.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  isListLoading = false;
  searchQuery = '';
  page = 1;
  movieData: ApiResponse = {
    page: 1,
    total_results: 0,
    total_pages: 1,
    results: [],
  };

  constructor(
    private userApiService: UserApi,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.isListLoading = true;
    this.userApiService.getTopRatedMoviesList({
      page: this.page.toString()
    }).subscribe(
      response => {
        this.movieData = response;
        this.isListLoading = false;
      }, error => {
        this.isListLoading = false;
        this.notificationService.openErrorSnackBar('Error in getting Movies list');
      });
  }

  searchMovies(searchValue: string, isFromNavigatePage = false): void {
    this.searchQuery = searchValue;
    if (!_.isEmpty(this.searchQuery)) {
      if (!isFromNavigatePage) {
        this.page = 1;
      }
      this.userApiService.searchMovie({
        page: this.page.toString(),
        query: this.searchQuery,
      }).subscribe(
        response => {
          this.movieData = response;
          this.isListLoading = false;
        }, error => {
          this.isListLoading = false;
          this.notificationService.openErrorSnackBar('Error in getting Movies list');
        });
    } else {
      this.getMovies();
    }
  }


  navigatePage(isNext: boolean): void {
    if (isNext && this.movieData.page <= this.movieData.total_pages) {
      this.page += 1;
      this.searchMovies(this.searchQuery, true);
    } else if (!isNext && this.movieData.page > 1) {
      this.page -= 1;
      this.searchMovies(this.searchQuery, true);
    }
  }

  clear(): void {
    this.searchQuery = '';
    this.page = 1;
    this.getMovies();
  }
}
