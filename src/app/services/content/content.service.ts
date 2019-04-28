import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ContentDictionary, ContentDictionaryAdapter } from './../../model/contentDictionary'
import { constants } from './../../constants/constants'
import { Observable, of } from 'rxjs'
import { catchError, map, tap, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient, private adapter: ContentDictionaryAdapter) {}

  getContentDictionary(): Observable<any> {
    return this.http.get<any>(constants.ENDPOINTS.CONTENT_DICTIONARY_API).pipe(
      map((item: any) => this.adapter.adapt(item)),
      catchError(this.handleError('getContentDictionary', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}
