import { Action } from '@ngrx/store';
import { Cryptocurrency } from './../../model/cryptocurrency';

export enum ActionTypes {
  requestCryptocurrencyListLoad = '[Cryptocurrency] List Request Load',
  successCryptocurrencyListLoad = '[Cryptocurrency] List Success Load',
  failureCryptocurrencyListLoad = '[Cryptocurrency] List Failure Load',
  requestSingleCryptocurrencyLoad = '[Cryptocurrency] Single Request Load',
  successSingleCryptocurrencyLoad = '[Cryptocurrency] Single Success Load',
  failureSingleCryptocurrencyLoad = '[Cryptocurrency] Single Failure Load',
  changeSearchKeyword = '[Cryptocurrency] Search Keyword Change',
}

export class RequestCryptocurrencyListLoad implements Action {
  readonly type = ActionTypes.requestCryptocurrencyListLoad;
}

export class SuccessCryptocurrencyListLoad implements Action {
  readonly type = ActionTypes.successCryptocurrencyListLoad;

  constructor(public payload: { data: Cryptocurrency[] }) {}
}

export class FailureCryptocurrencyListLoad implements Action {
  readonly type = ActionTypes.failureCryptocurrencyListLoad;
}

export class RequestSingleCryptocurrencyLoad implements Action {
  readonly type = ActionTypes.requestSingleCryptocurrencyLoad;

  constructor(public payload: { data: string }) {}
}

export class SuccessSingleCryptocurrencyLoad implements Action {
  readonly type = ActionTypes.successSingleCryptocurrencyLoad;

  constructor(public payload: { data: Cryptocurrency }) {}
}

export class FailureSingleCryptocurrencyLoad implements Action {
  readonly type = ActionTypes.failureSingleCryptocurrencyLoad;
}

export class ChangeSearchKeyword implements Action {
  readonly type = ActionTypes.changeSearchKeyword;

  constructor(public payload: { data: string }) {}
}

export type ActionsUnion = RequestCryptocurrencyListLoad | SuccessCryptocurrencyListLoad | FailureCryptocurrencyListLoad | RequestSingleCryptocurrencyLoad | SuccessSingleCryptocurrencyLoad | FailureSingleCryptocurrencyLoad | ChangeSearchKeyword;
