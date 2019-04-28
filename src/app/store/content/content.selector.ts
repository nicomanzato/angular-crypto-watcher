import { createSelector } from '@ngrx/store';
import { ContentState } from './content.reducer';
import { AppState } from './../app.state';

export const selectContent = (state: AppState) => state.content;

export const selectContentDictionary = (appState: AppState) => {
  return selectContent(appState).contentDictionary;
};
