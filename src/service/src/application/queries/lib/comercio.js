import manageRequest from '@/domain/manageRequest';

const comercioUseCases = {
  getComercios: (signal, values, token) => {
    
    return manageRequest(
      signal,
      'getComercios',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    );
  },

  postComercios: (signal, values, token) => {
    
    return manageRequest(
      signal,
      'getComercios',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    );
  },
};

export default comercioUseCases;
