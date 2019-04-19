const API_PORT = process.env.PORT || 8080;

export const environment = {
  production: true,
  ENDPOINTS: {
    CRYPTOCURRENCY_API: `https://angular-cryptowatcher.herokuapp.com:${API_PORT}/api/cryptocurrency`,
    GLOBAL_DATA_API: `https://angular-cryptowatcher.herokuapp.com:${API_PORT}/api/global_data`
  }
};
