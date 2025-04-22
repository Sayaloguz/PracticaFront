export const CLIENTE_QUERIES = {
  // Esta  parte no tiene mucho sentido porque nunca llamamos a esta función, así como el resto de cosas en la capa domain
    getClients: () =>
      `${process.env.NEXT_PUBLIC_API_URL}/getClients` //'http://localhost:8081/api/getClients'
  };
  
  
  export const CLIENTE_ERROR_MESSAGES = {
    // exampleQuery:'error'
    clienteQuery: 'error' // 
  }