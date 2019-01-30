import { createSelector } from '@ngrx/store';
import { CryptocurrencyState } from './cryptocurrency.reducer';
import { AppState } from './../app.state';

export const selectCryptocurrency = (state: AppState) => state.cryptocurrency;
export const selectSingleCryptocurrencySymbol = (state: CryptocurrencyState) => state.singleCryptocurrencySymbol;

export const selectCryptocurrencyList = createSelector(
  selectCryptocurrency,
  (state: CryptocurrencyState) => {
    return state.cryptocurrencyList.filter((cryptocurrency) => {
      return cryptocurrency.getName().toUpperCase().includes(state.searchKeyword.toUpperCase());
    });
  }
);
