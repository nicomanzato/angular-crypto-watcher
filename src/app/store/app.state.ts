import { CryptocurrencyState, cryptocurrencyReducer } from './cryptocurrency/cryptocurrency.reducer';
import { GlobalDataState, globalDataReducer } from './globalData/globalData.reducer';

export interface AppState {
  cryptocurrency: CryptocurrencyState;
  globalData: GlobalDataState;
}

export const rootReducer = {
  cryptocurrency: cryptocurrencyReducer,
  globalData: globalDataReducer
}
