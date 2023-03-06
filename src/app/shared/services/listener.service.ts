import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listener } from '../model/listener';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Startstop } from '../model/startstop';

@Injectable({
  providedIn: 'root',
})
export class ListenerService {
  // Define API
  apiURL = 'http://192.168.99.151:52774/cdc/listener';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ` + btoa('SuperUser:SYS'),
    }),
  };


  // HttpClient API post() method => Create listener
  createListener(listener: any): Observable<Listener> {
    return this.http
      .post<Listener>(
        this.apiURL + '/add',
        JSON.stringify(listener),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch listeners list
  getListeners(): Observable<Listener> {
    return this.http
      .get<Listener>(this.apiURL + '/listeners',
      this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

    // HttpClient API post() method => Start Listener
    startListener(startstop: any): Observable<Startstop> {
      return this.http
        .post<Startstop>(
          this.apiURL + '/startlistener',
          JSON.stringify(startstop),
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    }

        // HttpClient API post() method => Start Listener
        stopListener(startstop: any): Observable<Startstop> {
          return this.http
            .post<Startstop>(
              this.apiURL + '/stoplistener',
              JSON.stringify(startstop),
              this.httpOptions
            )
            .pipe(retry(1), catchError(this.handleError));
        }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
