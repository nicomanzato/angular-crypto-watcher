import { environment } from './../../environments/environment';

export const constants = {
  ENDPOINTS: {
    CRYPTOCURRENCY_API: environment.ENDPOINTS.ROOT + environment.ENDPOINTS.PORT + '/api/cryptocurrency',
    GLOBAL_DATA_API: environment.ENDPOINTS.ROOT + environment.ENDPOINTS.PORT + '/api/global_data',
    CONTENT_DICTIONARY_API: environment.ENDPOINTS.ROOT + environment.ENDPOINTS.PORT + '/api/content',
  },
};
