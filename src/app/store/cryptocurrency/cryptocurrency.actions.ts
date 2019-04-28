import { Action } from '@ngrx/store'
import { Cryptocurrency } from './../../model/cryptocurrency'

export enum ActionTypes {
  REQUEST_CRYPTOCURRENCY_LIST_LOAD = '[Cryptocurrency] List Request Load',
  SUCCESS_CRYPTOCURRENCY_LIST_LOAD = '[Cryptocurrency] List Success Load',
  FAILURE_CRYPTOCURRENCY_LIST_LOAD = '[Cryptocurrency] List Failure Load',
  REQUEST_SINGLE_CRYPTOCURRENCY_LOAD = '[Cryptocurrency] Single Request Load',
  SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD = '[Cryptocurrency] Single Success Load',
  FAILURE_SINGLE_CRYPTOCURRENCY_LOAD = '[Cryptocurrency] Single Failure Load',
  CHANGE_SEARCH_KEYWORD = '[Cryptocurrency] Search Keyword Change',
}

export class RequestCryptocurrencyListLoad implements Action {
  readonly type = ActionTypes.REQUEST_CRYPTOCURRENCY_LIST_LOAD
}

export class SuccessCryptocurrencyListLoad implements Action {
  readonly type = ActionTypes.SUCCESS_CRYPTOCURRENCY_LIST_LOAD

  constructor(public payload: Cryptocurrency[]) {}
}

export class FailureCryptocurrencyListLoad implements Action {
  readonly type = ActionTypes.FAILURE_CRYPTOCURRENCY_LIST_LOAD
}

export class RequestSingleCryptocurrencyLoad implements Action {
  readonly type = ActionTypes.REQUEST_SINGLE_CRYPTOCURRENCY_LOAD

  constructor(public payload: string) {}
}

export class SuccessSingleCryptocurrencyLoad implements Action {
  readonly type = ActionTypes.SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD

  constructor(public payload: Cryptocurrency) {}
}

export class FailureSingleCryptocurrencyLoad implements Action {
  readonly type = ActionTypes.FAILURE_SINGLE_CRYPTOCURRENCY_LOAD
}

export class ChangeSearchKeyword implements Action {
  readonly type = ActionTypes.CHANGE_SEARCH_KEYWORD

  constructor(public payload: string) {}
}

export type ActionsUnion =
  | RequestCryptocurrencyListLoad
  | SuccessCryptocurrencyListLoad
  | FailureCryptocurrencyListLoad
  | RequestSingleCryptocurrencyLoad
  | SuccessSingleCryptocurrencyLoad
  | FailureSingleCryptocurrencyLoad
  | ChangeSearchKeyword
