import { Action } from '@ngrx/store';
import { GlobalData } from './../../model/globalData';

export enum ActionTypes {
  requestGlobalDataLoad = '[GlobalData] Request Load',
  successGlobalDataLoad = '[GlobalData] Success Load',
  failureGlobalDataLoad = '[GlobalData] Failure Load',
}

export class RequestGlobalDataLoad implements Action {
  readonly type = ActionTypes.requestGlobalDataLoad;
}

export class SuccessGlobalDataLoad implements Action {
  readonly type = ActionTypes.successGlobalDataLoad;

  constructor(public payload: { data: GlobalData }) {}
}

export class FailureGlobalDataLoad implements Action {
  readonly type = ActionTypes.failureGlobalDataLoad;
}

export type ActionsUnion = RequestGlobalDataLoad | SuccessGlobalDataLoad | FailureGlobalDataLoad;
