import { Action } from '@ngrx/store'
import { GlobalData } from './../../model/globalData'

export enum ActionTypes {
  REQUEST_GLOBAL_DATA_LOAD = '[GlobalData] Request Load',
  SUCCESS_GLOBAL_DATA_LOAD = '[GlobalData] Success Load',
  FAILURE_GLOBAL_DATA_LOAD = '[GlobalData] Failure Load',
}

export class RequestGlobalDataLoad implements Action {
  readonly type = ActionTypes.REQUEST_GLOBAL_DATA_LOAD
}

export class SuccessGlobalDataLoad implements Action {
  readonly type = ActionTypes.SUCCESS_GLOBAL_DATA_LOAD

  constructor(public payload: GlobalData) {}
}

export class FailureGlobalDataLoad implements Action {
  readonly type = ActionTypes.FAILURE_GLOBAL_DATA_LOAD
}

export type ActionsUnion = RequestGlobalDataLoad | SuccessGlobalDataLoad | FailureGlobalDataLoad
