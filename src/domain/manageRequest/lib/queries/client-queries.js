export const CLIENT_QUERIES = {
    //getClients: () => `${process.env.CLIENT_API_URL}/getClients`,
    // 
    getClients:  () => `http://localhost:8081/api/getClients`,
  };
  
  
  export const CLIENT_ERROR_MESSAGES = {
    // exampleQuery:'error'
    clientQuery: 'error' // 
  }