import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActionTypes,
  SuccessCryptocurrencyListLoad,
  FailureCryptocurrencyListLoad,
  SuccessSingleCryptocurrencyLoad,
  FailureSingleCryptocurrencyLoad,
} from './cryptocurrency.actions';
import { EMPTY, of, Observable } from 'rxjs';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';
import { CryptocurrencyService } from './../../services/cryptocurrency/cryptocurrency.service';
import { CryptocurrencyState } from './cryptocurrency.reducer';
import { selectSingleCryptocurrencySymbol } from './cryptocurrency.selector';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

@Injectable()
export class CryptocurrencyEffects {
  @Effect()
  loadCryptocurrencyList$ = this.actions$.pipe(
    ofType(ActionTypes.REQUEST_CRYPTOCURRENCY_LIST_LOAD),
    mergeMap(() =>
      this.cryptocurrencyService.getCryptocurrencies().pipe(
        map(cryptocurrencies => new SuccessCryptocurrencyListLoad(cryptocurrencies)),
        catchError(() => of(new FailureCryptocurrencyListLoad()))
      )
    )
  );

  @Effect()
  loadSingleCryptocurrency$ = this.actions$.pipe(
    ofType(ActionTypes.REQUEST_SINGLE_CRYPTOCURRENCY_LOAD),
    withLatestFrom(this.store$),
    mergeMap(([action, state]) =>
      this.cryptocurrencyService.getCryptocurrency(selectSingleCryptocurrencySymbol(state)).pipe(
        map(cryptocurrency => new SuccessSingleCryptocurrencyLoad(cryptocurrency)),
        catchError(() => of(new FailureSingleCryptocurrencyLoad()))
      )
    )
  );

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(
    private actions$: Actions,
    private cryptocurrencyService: CryptocurrencyService,
    private store$: Store<AppState>
  ) {}
}
