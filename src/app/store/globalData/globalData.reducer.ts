import * as GlobalDataActions from './globalData.actions';
import { GlobalData } from './../../model/globalData';

export interface State {
  globalData: GlobalData;
  isLoadingGlobalData: boolean;
}

const mockGlobalData = new GlobalData(0, 0, 0, 0, 0, 0);

export const initialState: State = {
  globalData: mockGlobalData,
  isLoadingGlobalData: false,
}

export function globalDataReducer(
  state = initialState,
  action: GlobalDataActions.ActionsUnion
): State {
  switch (action.type) {
    case GlobalDataActions.ActionTypes.requestGlobalDataLoad: {
      return {
        ...state,
        isLoadingGlobalData: true,
      };
    }

    case GlobalDataActions.ActionTypes.successGlobalDataLoad: {
      return {
        ...state,
        isLoadingGlobalData: false,
        globalData: action.payload.data,
      };
    }

    case GlobalDataActions.ActionTypes.failureGlobalDataLoad: {
      return {
        ...state,
        isLoadingGlobalData: false,
      };
    }

    default: {
      return state;
    }

  }
}
