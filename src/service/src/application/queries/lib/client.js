import manageRequest from '@/domain/manageRequest';

const clientUseCases = {
  getClients: (signal, values, token) => {
    
    return manageRequest(
      signal,
      'getClients',
      values,
      'normal',
      'normal',
      'get',
      token,
      undefined,
    );

    /* 
    
      signal,
  requestString,
  params = {},
  mode = 'normal',
  responseType = 'normal',
  method = 'get',
  token,
  cache = 'no-store',
  headers = {},
  commonBody = true,
    */
  }
};

export default clientUseCases;
