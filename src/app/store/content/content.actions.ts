import { Action } from '@ngrx/store'
import { ContentDictionary } from './../../model/contentDictionary'

export enum ActionTypes {
  REQUEST_CONTENT_DICTIONARY_LOAD = '[Content] Dictionary Request Load',
  SUCCESS_CONTENT_DICTIONARY_LOAD = '[Content] Dictionary Success Load',
  FAILURE_CONTENT_DICTIONARY_LOAD = '[Content] Dictionary Failure Load',
}

export class RequestContentDictionaryLoad implements Action {
  readonly type = ActionTypes.REQUEST_CONTENT_DICTIONARY_LOAD
}

export class SuccessContentDictionaryLoad implements Action {
  readonly type = ActionTypes.SUCCESS_CONTENT_DICTIONARY_LOAD

  constructor(public payload: ContentDictionary) {}
}

export class FailureContentDictionaryLoad implements Action {
  readonly type = ActionTypes.FAILURE_CONTENT_DICTIONARY_LOAD
}

export type ActionsUnion = RequestContentDictionaryLoad | SuccessContentDictionaryLoad | FailureContentDictionaryLoad
