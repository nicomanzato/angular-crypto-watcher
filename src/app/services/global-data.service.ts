import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GlobalData, GlobalDataAdapter } from "./../model/globalData";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { constants } from "./../constants/constants";

@Injectable({
  providedIn: "root"
})
export class GlobalDataService {
  constructor(private http: HttpClient, private adapter: GlobalDataAdapter) {}

  getGlobalData(): Observable<any> {
    return this.http.get<any>(constants.ENDPOINTS.GLOBAL_DATA_API).pipe(
      map((item: any) => this.adapter.adapt(item)),
      catchError(this.handleError("getGlobalData", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
