import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, SuccessCryptocurrencyListLoad, SuccessSingleCryptocurrencyLoad} from './cryptocurrency.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { CryptocurrencyService } from './../../cryptocurrency.service';
import { State as CryptocurrencyState } from './cryptocurrency.reducer';
import { selectSingleCryptocurrencySymbol } from './cryptocurrency.selector';
import { Store } from '@ngrx/store';

@Injectable()
export class CryptocurrencyEffects {

  @Effect()
  loadCryptocurrencyList$ = this.actions$
    .pipe(
      ofType(ActionTypes.requestCryptocurrencyListLoad),
      mergeMap(() => this.cryptocurrencyService.getCryptocurrencies()
        .pipe(
          map(cryptocurrencies => new SuccessCryptocurrencyListLoad({data: cryptocurrencies})),
        ))
      );

  @Effect()
  loadSingleCryptocurrency$ = this.actions$
    .pipe(
      ofType(ActionTypes.requestSingleCryptocurrencyLoad),
      withLatestFrom(this.store$),
      mergeMap(([action, state]) => this.cryptocurrencyService.getCryptocurrency(selectSingleCryptocurrencySymbol(state))
        .pipe(
          map(cryptocurrency => new SuccessSingleCryptocurrencyLoad({data: cryptocurrency})),
        ))
      );

  constructor(
    private actions$: Actions,
    private cryptocurrencyService: CryptocurrencyService,
    private store$: Store<{ cryptocurrency: CryptocurrencyState }>,
  ) {}
}
