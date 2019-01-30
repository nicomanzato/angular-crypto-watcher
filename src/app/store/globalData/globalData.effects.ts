import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, SuccessGlobalDataLoad } from './globalData.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { GlobalDataService } from './../../global-data.service';

@Injectable()
export class GlobalDataEffects {

  @Effect()
  loadGlobalData$ = this.actions$
    .pipe(
      ofType(ActionTypes.REQUEST_GLOBAL_DATA_LOAD),
      mergeMap(() => this.globalDataService.getGlobalData()
        .pipe(
          map(globalData => new SuccessGlobalDataLoad(globalData)),
        ))
      );

  constructor(
    private actions$: Actions,
    private globalDataService: GlobalDataService,
  ) {}
}
