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

import { appStateMockUp } from './../../testing/app.mockup';
import { cryptocurrencyStateMockUp } from './../../testing/cryptocurrency.mockup';

describe('Cryptocurrency Selectors:', () => {
  describe('selectCryptocurrency', () => {
    it('should return a CryptocurrencyState', () => {
      const appState: AppState = appStateMockUp;
      const cryptocurrencyState: CryptocurrencyState = cryptocurrencyStateMockUp;

      expect(selectCryptocurrency(appState)).toBe(cryptocurrencyState);
    });
  });

  describe('selectSingleCryptocurrencySymbol', () => {
    it('should return a SingleCryptocurrencySymbol', () => {
      const appState: AppState = appStateMockUp;
      const cryptocurrencyState: CryptocurrencyState = cryptocurrencyStateMockUp;
      const expectedSymbol: string = cryptocurrencyState.singleCryptocurrencySymbol;

      expect(selectSingleCryptocurrencySymbol(appState)).toBe(expectedSymbol);
    });
  });

  describe('selectCryptocurrencyList', () => {
    it('should return a CryptocurrencyList', () => {
      const appState: AppState = appStateMockUp;
      const cryptocurrencyList = appStateMockUp.cryptocurrency.cryptocurrencyList;

      expect(selectCryptocurrencyList(appState)).toEqual(cryptocurrencyList);
    });

    it('should match with one result', () => {
      const appState: AppState = Object.assign({}, appStateMockUp);
      const cryptocurrencyState: CryptocurrencyState = Object.assign({}, cryptocurrencyStateMockUp);
      cryptocurrencyState.searchKeyword = 'eth';
      appState.cryptocurrency = cryptocurrencyState;

      expect(selectCryptocurrencyList(appState).length).toEqual(1);
    });

    it('should return an empty list when there is no match', () => {
      const appState: AppState = Object.assign({}, appStateMockUp);
      const cryptocurrencyState: CryptocurrencyState = Object.assign({}, cryptocurrencyStateMockUp);
      cryptocurrencyState.searchKeyword = 'not-a-match';
      appState.cryptocurrency = cryptocurrencyState;

      expect(selectCryptocurrencyList(appState).length).toEqual(0);
    });

  });

});
