import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { environment } from '../../../environments/environment';

export class Request {
    private static token = '';
    private baseUrl: string;
    private http: HttpClient;
    private options: object;
    private optionsHeader: object;
    private optionsHeaderWithCORS: object;

    private static buildRequestOptions(): any {
        const options = {
        };
        return options;
    }

    private static buildRequestWithHeader(): any {
        const headers = Request.buildHeaders();
        const options = {
            headers,
        };
        return options;
    }

    private static buildHeadersWithCORS(): any {
        return new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            reportProgress: 'true',
        });
    }

    private static buildRequestWithCORSHeader(): any {
        const headers = Request.buildHeadersWithCORS();
        const options = {
            headers,
        };
        return options;
    }

    // tslint:disable-next-line:member-ordering
    private static buildHeaders(): any {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    // tslint:disable-next-line:member-ordering
    private static getUrl(path: string): string {
        // Get current application url
        return ('/api/').concat(path);
    }

    private handleError(error: Response): any {
        return throwError(_.get(error, 'error') || {});
    }

    constructor(http: HttpClient) {
        this.baseUrl = `${environment.endPointApi}/${environment.versionNumber}/`;
        this.http = http;
        this.options = Request.buildRequestOptions();
        this.optionsHeader = Request.buildRequestWithHeader();
        this.optionsHeaderWithCORS = Request.buildRequestWithCORSHeader();
    }

    httpGet(path: string): Observable<any> {
        return this.http.get(this.baseUrl.concat(path), this.options)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpPost(path: string, data: any, formData = false): Observable<any> {
        const header = formData ? this.options : this.optionsHeader;
        return this.http.post(this.baseUrl.concat(path), data, header)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpDelete(path: string): Observable<any> {
        return this.http.delete(this.baseUrl.concat(path), this.options)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpPut(path: string, data: any, formData = false): Observable<any> {
        const header = formData ? this.options : this.optionsHeader;
        return this.http.put(this.baseUrl.concat(path), data, header)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpS3Put(path: string, data: any): Observable<any> {
        const header = this.optionsHeaderWithCORS;
        return this.http.put(path, data, header)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

}

