import { ContentDictionary } from './../model/contentDictionary';
import { ContentState } from './../store/content/content.reducer';

const mockContentDictionary = new ContentDictionary('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

export const contentStateMockUp: ContentState = {
  contentDictionary: mockContentDictionary,
  isLoadingContentDictionary: false,
};
