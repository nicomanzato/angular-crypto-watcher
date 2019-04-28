import { GlobalData } from './../model/globalData';
import { GlobalDataState } from './../store/globalData/globalData.reducer';

export const globalDataMockUp = new GlobalData(115962335109, 17829037951, 52.68, 898, 1223, 15569);

export const globalDataStateMockUp: GlobalDataState = {
  globalData: globalDataMockUp,
  isLoadingGlobalData: false,
};
