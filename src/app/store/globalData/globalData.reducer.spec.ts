import { initialState, globalDataReducer } from './globalData.reducer';
import {
  ActionTypes,
  RequestGlobalDataLoad,
  SuccessGlobalDataLoad,
  FailureGlobalDataLoad,
} from './globalData.actions';
import { GlobalData } from './../../model/globalData';

describe('GlobalDataReducer', () => {
  describe('REQUEST_GLOBAL_DATA_LOAD action', () => {
    it('should set isLoadingGlobalData to true', () => {
      const action = new RequestGlobalDataLoad();
      const state = globalDataReducer(initialState, action);

      expect(state.isLoadingGlobalData).toEqual(true);
    });
  });

  describe('SUCCESS_GLOBAL_DATA_LOAD action', () => {
    it('should set isLoadingGlobalData to false', () => {
      const payload: GlobalData = new GlobalData(0, 0, 0, 0, 0, 0);
      const action = new SuccessGlobalDataLoad(payload);
      const state = globalDataReducer(initialState, action);

      expect(state.isLoadingGlobalData).toEqual(false);
    });

    it('should load new global data in globalData', () => {
      const payload: GlobalData = new GlobalData(0, 0, 0, 0, 0, 0);
      const action = new SuccessGlobalDataLoad(payload);
      const state = globalDataReducer(initialState, action);

      expect(state.globalData).toEqual(payload);
    });
  });

  describe('FAILURE_GLOBAL_DATA_LOAD action', () => {
    it('should set isLoadingGlobalData to false', () => {
      const action = new FailureGlobalDataLoad();
      const state = globalDataReducer(initialState, action);

      expect(state.isLoadingGlobalData).toEqual(false);
    });
  });
});
