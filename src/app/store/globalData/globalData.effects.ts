import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, SuccessGlobalDataLoad, FailureGlobalDataLoad } from './globalData.actions';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';
import { GlobalDataService } from './../../services/globalData/global-data.service';

@Injectable()
export class GlobalDataEffects {
  @Effect()
  loadGlobalData$ = this.actions$.pipe(
    ofType(ActionTypes.REQUEST_GLOBAL_DATA_LOAD),
    mergeMap(() =>
      this.globalDataService.getGlobalData().pipe(
        map(globalData => new SuccessGlobalDataLoad(globalData)),
        catchError(() => of(new FailureGlobalDataLoad()))
      )
    )
  );

  constructor(private actions$: Actions, private globalDataService: GlobalDataService) {}
}
