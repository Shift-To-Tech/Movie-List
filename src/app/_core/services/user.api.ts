import { Injectable,} from '@angular/core';
import { Request } from '../../_lib/http/request';
import { MovieParams } from '../../_lib/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserApi extends Request {
    constructor(
        private httpClient: HttpClient,
    ) {
        super(httpClient);
    }

    getTopRatedMoviesList(values: MovieParams): Observable<any> {
        const params = new URLSearchParams();
        params.append('api_key', environment.apiKey);
        params.append('page', _.get(values, 'page', '1'));
        const url = `movie/top_rated?${params.toString()}`;
        return this.httpGet(url);
    }

    searchMovie(values: MovieParams): Observable<any> {
        const params = new URLSearchParams();
        params.append('api_key', environment.apiKey);
        params.append('page', _.get(values, 'page', '1'));
        if (!_.isEmpty(_.get(values, 'query', ''))) {
            params.append('query', encodeURI(_.get(values, 'query', '')));
        }
        const url = `search/movie?${params.toString()}`;
        return this.httpGet(url);
    }
}
