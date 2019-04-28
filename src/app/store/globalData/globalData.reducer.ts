import * as GlobalDataActions from './globalData.actions'
import { GlobalData } from './../../model/globalData'

export interface GlobalDataState {
  globalData: GlobalData
  isLoadingGlobalData: boolean
}

const mockGlobalData = new GlobalData(0, 0, 0, 0, 0, 0)

export const initialState: GlobalDataState = {
  globalData: mockGlobalData,
  isLoadingGlobalData: false,
}

export function globalDataReducer(state = initialState, action: GlobalDataActions.ActionsUnion): GlobalDataState {
  switch (action.type) {
    case GlobalDataActions.ActionTypes.REQUEST_GLOBAL_DATA_LOAD: {
      return {
        ...state,
        isLoadingGlobalData: true,
      }
    }

    case GlobalDataActions.ActionTypes.SUCCESS_GLOBAL_DATA_LOAD: {
      return {
        ...state,
        isLoadingGlobalData: false,
        globalData: action.payload,
      }
    }

    case GlobalDataActions.ActionTypes.FAILURE_GLOBAL_DATA_LOAD: {
      return {
        ...state,
        isLoadingGlobalData: false,
      }
    }

    default: {
      return state
    }
  }
}
