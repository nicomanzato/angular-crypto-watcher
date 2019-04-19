import { environment } from "./../../environments/environment";

declare var process;

const API_PORT = process.env.PORT || 8080;

export const constants = {
  ENDPOINTS: {
    CRYPTOCURRENCY_API: environment.ENDPOINTS.ROOT + API_PORT + "/api/cryptocurrency",
    GLOBAL_DATA_API: environment.ENDPOINTS.ROOT + API_PORT + "api/global_data"
  }
};
