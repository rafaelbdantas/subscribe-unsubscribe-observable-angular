import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaceHolder } from './models/place-holder.model';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PlaceHolderApiService {

  placeHolderUrl = 'https://jsonplaceholder.typicode.com/todos'; 

  placeHolder$ = new Observable<PlaceHolder>();
  constructor(
    private http: HttpClient) {
  }

  getPlaceHolder (id: number): Observable<PlaceHolder> {
    return this.http.get<PlaceHolder>(`${this.placeHolderUrl}/${id}`)
      .pipe(
        tap(placeHolder => placeHolder),
      );
  }

  getPlaceHolders (): Observable<PlaceHolder> {
    return this.http.get<PlaceHolder>(`${this.placeHolderUrl}`)
      .pipe(
        tap(placeHolder => placeHolder),
      );
  }
}
