import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cryptocurrency, CryptocurrencyAdapter } from './../../model/cryptocurrency';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { constants } from './../../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class CryptocurrencyService {
  constructor(private http: HttpClient, private adapter: CryptocurrencyAdapter) {}

  getCryptocurrencies(): Observable<Cryptocurrency[]> {
    return this.http.get<any[]>(constants.ENDPOINTS.CRYPTOCURRENCY_API).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
      catchError(this.handleError('getCryptocurrencies', []))
    );
  }

  getCryptocurrency(id: string): Observable<any> {
    const url = `${constants.ENDPOINTS.CRYPTOCURRENCY_API}/${id}`;
    return this.http.get<any>(url).pipe(
      map((item: any) => this.adapter.adapt(item)),
      catchError(this.handleError(`getCryptocurrency id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
