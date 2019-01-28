import { createSelector } from '@ngrx/store';
import { State as CryptocurrencyState } from './cryptocurrency.reducer';

export interface AppState {
  cryptocurrency: CryptocurrencyState;
}

export const selectCryptocurrency = (state: AppState) => state.cryptocurrency;

export const selectCryptocurrencyList = createSelector(
  selectCryptocurrency,
  (state: CryptocurrencyState) => {
    return state.cryptocurrencyList.filter((cryptocurrency) => {
      return cryptocurrency.getName().toUpperCase().includes(state.searchKeyword.toUpperCase());
    });
  }
);

export const selectSingleCryptocurrencySymbol = (state) => state.cryptocurrency.singleCryptocurrencySymbol;
