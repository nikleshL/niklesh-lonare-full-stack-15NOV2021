import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  /**
   * Fetch Resource
   * @param endpoint
   */
  get = (endpoint: string) => {
    return this.http.get<any[]>(endpoint)
      .pipe(
        catchError(this.handleError<any[]>([]))
      );
  }

  /**
   * To call Post Method
   * @param endpoint
   * @param data
   */
   post(endpoint: string, data: any) {
    return this.http.post(endpoint, data).pipe(
      catchError(this.handleError<any>())
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
