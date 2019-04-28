import { AppState } from './../store/app.state';
import { cryptocurrencyStateMockUp } from './cryptocurrency.mockup';
import { globalDataStateMockUp } from './globalData.mockup';
import { contentStateMockUp } from './contentState.mockup';

export const appStateMockUp: AppState = {
  cryptocurrency: cryptocurrencyStateMockUp,
  globalData: globalDataStateMockUp,
  content: contentStateMockUp,
};
