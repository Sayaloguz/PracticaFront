  // getClients, getClientById, getClientsByName, getClientByEmail, updateClient, deleteClient, createClient

export const CLIENT_QUERIES = {
    //getClients: () => `${process.env.CLIENT_API_URL}/getClients`,
    // 
    getClients:  () => `http://localhost:8081/api/getClients`,
    getClientById: () => `http://localhost:8081/api/getById/{id}`,
    getClientsByName: () => `http://localhost:8081/api/getByName/{name}`,
    getClientByEmail: () => `http://localhost:8081/api/getByEmail/{email}`,
    updateClient: () => `http://localhost:8081/api/update`,
    deleteClient: () => `http://localhost:8081/api/delete`, // No existe aún
    createClient: () => `http://localhost:8081/api/create`
  };
  
  
  export const CLIENT_ERROR_MESSAGES = {
    // exampleQuery:'error'
    clientQuery: 'error' // 
  }