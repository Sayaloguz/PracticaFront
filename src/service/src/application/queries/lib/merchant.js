import manageRequest from '@/domain/manageRequest';

const merchantUseCases = {
  getMerchants: (signal, values, token) => {
    
    return manageRequest(
      signal,
      'getMerchants',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    );
  }
};

export default merchantUseCases;
