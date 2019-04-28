import * as ContentActions from './content.actions';
import { ContentDictionary } from './../../model/contentDictionary';

export interface ContentState {
  contentDictionary: ContentDictionary;
  isLoadingContentDictionary: boolean;
}

const mockContentDictionary = new ContentDictionary('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
export const initialState: ContentState = {
  contentDictionary: mockContentDictionary,
  isLoadingContentDictionary: false,
};

export function contentReducer(state = initialState, action: ContentActions.ActionsUnion): ContentState {
  switch (action.type) {
    case ContentActions.ActionTypes.REQUEST_CONTENT_DICTIONARY_LOAD: {
      return {
        ...state,
        isLoadingContentDictionary: true,
      };
    }

    case ContentActions.ActionTypes.SUCCESS_CONTENT_DICTIONARY_LOAD: {
      return {
        ...state,
        isLoadingContentDictionary: false,
        contentDictionary: action.payload,
      };
    }

    case ContentActions.ActionTypes.FAILURE_CONTENT_DICTIONARY_LOAD: {
      return {
        ...state,
        isLoadingContentDictionary: false,
      };
    }

    default: {
      return state;
    }
  }
}
