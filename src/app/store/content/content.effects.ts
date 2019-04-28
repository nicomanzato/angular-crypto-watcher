import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, SuccessContentDictionaryLoad, FailureContentDictionaryLoad } from './content.actions';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';
import { ContentService } from './../../services/content/content.service';

@Injectable()
export class ContentEffects {
  @Effect()
  loadContentDictionary$ = this.actions$.pipe(
    ofType(ActionTypes.REQUEST_CONTENT_DICTIONARY_LOAD),
    mergeMap(() =>
      this.contentService.getContentDictionary().pipe(
        map(contentDictionary => new SuccessContentDictionaryLoad(contentDictionary)),
        catchError(() => of(new FailureContentDictionaryLoad()))
      )
    )
  );

  constructor(private actions$: Actions, private contentService: ContentService) {}
}
