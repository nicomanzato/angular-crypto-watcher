import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cryptocurrency } from './model/cryptocurrency';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyService {

  private cryptocurrencyUrl = 'api/cryptocurrency';

  constructor(private http: HttpClient) { }

  getCryptocurrencies(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(this.cryptocurrencyUrl)
      .pipe(catchError(this.handleError('getCryptocurrencies', [])));
  }

  getCryptocurrency(id: number): Observable<Cryptocurrency> {
    const url = `${this.cryptocurrencyUrl}/${id}`;
    return this.http.get<Cryptocurrency>(url).pipe(
      catchError(this.handleError<Cryptocurrency>(`getCryptocurrency id=${id}`))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
