import { AppState } from './../store/app.state';
import { cryptocurrencyStateMockUp } from './cryptocurrency.mockup';
import { globalDataStateMockUp } from './globalData.mockup';

export const appStateMockUp: AppState = {
  cryptocurrency: cryptocurrencyStateMockUp,
  globalData: globalDataStateMockUp,
}
