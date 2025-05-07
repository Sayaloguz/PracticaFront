import manageRequest from '@/domain/manageRequest';
  // getClients, getClientById, getClientsByName, getClientByEmail, updateClient, deleteClient, createClient
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
  },

  getClientById: (signal, values, token) => {
    return manageRequest(
      signal,
      'getClientById',
      values,
      'normal',
      'normal',
      'get',
      token,
      undefined,
    );
  },
  getClientsByName: (signal, values, token) => {
    return manageRequest(
      signal,
      'getClientsByName',
      values,
      'normal',
      'normal',
      'get',
      token,
      undefined,
    );
  },
  getClientByEmail: (signal, values, token) => {
    return manageRequest(
      signal,
      'getClientByEmail',
      values,
      'normal',
      'normal',
      'get',
      token,
      undefined,
    );
  },
  updateClient: (signal, values, token) => {
    return manageRequest(
      signal,
      'updateClient',
      values,
      'normal',
      'normal',
      'put',
      token,
      undefined,
      {
        'Content-Type': 'application/json' 
      }
    );
  },
  deleteClient: (signal, values, token) => {
    return manageRequest(
      signal,
      'deleteClient',
      values,
      'normal',
      'normal',
      'delete',
      token,
      undefined,
    );
  },
  createClient: (signal, values, token) => {
    return manageRequest(
      signal,
      'createClient',
      values,
      'normal',
      'normal',
      'post',
      token,
      undefined,
      {
        'Content-Type': 'application/json' 
      },
    );
  }

};

export default clientUseCases;
