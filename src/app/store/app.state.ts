import { ContentState, contentReducer } from './content/content.reducer'
import { CryptocurrencyState, cryptocurrencyReducer } from './cryptocurrency/cryptocurrency.reducer'
import { GlobalDataState, globalDataReducer } from './globalData/globalData.reducer'

export interface AppState {
  content: ContentState
  cryptocurrency: CryptocurrencyState
  globalData: GlobalDataState
}

export const rootReducer = {
  content: contentReducer,
  cryptocurrency: cryptocurrencyReducer,
  globalData: globalDataReducer,
}
