import { async, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { Cryptocurrency } from './../../model/cryptocurrency';
import { CryptocurrencyState } from './cryptocurrency.reducer';
import { AppState, rootReducer } from './../app.state';
import {
  selectCryptocurrency,
  selectSingleCryptocurrencySymbol,
  selectCryptocurrencyList,
} from './cryptocurrency.selector';

describe('Cryptocurrency Selectors:', () => {
  describe('selectCryptocurrency', () => {
    it('should return a CryptocurrencyState', () => {
      const appState: AppState = {
        cryptocurrency: 'This is the cryptocurrency state mock',
        globalData: 'And this is the global data state mock',
      }

      expect(selectCryptocurrency(appState)).toBe('This is the cryptocurrency state mock');
    });
  });

  describe('selectSingleCryptocurrencySymbol', () => {
    it('should return a SingleCryptocurrencySymbol', () => {
      const appState: AppState = {
        cryptocurrency: { singleCryptocurrencySymbol: 'Symbol Mock' },
        globalData: 'And this is the global data state mock',
      }

      expect(selectSingleCryptocurrencySymbol(appState.cryptocurrency)).toBe('Symbol Mock');
    });
  });

  describe('selectCryptocurrencyList', () => {
    it('should return a CryptocurrencyList', () => {
      const cryptocurrencyList = [new Cryptocurrency('', 'bitcoin', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)];
      const appState: AppState = {
        cryptocurrency: { cryptocurrencyList: cryptocurrencyList, searchKeyword: 'bit' },
      };

      expect(selectCryptocurrencyList(appState)).toEqual(cryptocurrencyList);
    });

    it('should return an empty list', () => {
      const cryptocurrencyList = [new Cryptocurrency('', 'bitcoin', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)];
      const appState: AppState = {
        cryptocurrency: { cryptocurrencyList: cryptocurrencyList, searchKeyword: 'eth' },
      };

      expect(selectCryptocurrencyList(appState).length).toEqual(0);
    });
  });

});
