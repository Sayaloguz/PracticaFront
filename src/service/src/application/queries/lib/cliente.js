import manageRequest from '@/domain/manageRequest';

const clienteUseCases = {
  getClientes: (signal, values, token) => {
    
    return manageRequest(
      signal,
      'getClientes',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    );
  },

  postClientes: (signal, values, token) => {
    
    return manageRequest(
      signal,
      'getClientes',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    );
  },
};

export default clienteUseCases;
