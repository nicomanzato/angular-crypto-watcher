import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalData, GlobalDataAdapter } from './model/globalData';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  private globalDataUrl = 'http://10.160.11.56:8080/global_data';

  constructor(
    private http: HttpClient,
    private adapter: GlobalDataAdapter
  ) { }

  getGlobalData(): Observable<any> {
    return this.http.get<any>(this.globalDataUrl)
      .pipe(
        map((item: any) => this.adapter.adapt(item)),
        catchError(this.handleError('getGlobalData', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
