import manageRequest from '@/domain/manageRequest';

// getMerchants, getMerchantById, getMerchantsByName, deleteMerchant, updateMerchant, createMerchant
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
  },
  getMerchantById: (signal, values, token) => {
    return manageRequest(
      signal,
      'getMerchantById',
      values,
      'normal',
      'normal',
      'get',
      token,
      undefined,
    );
  },
  getMerchantsByName: (signal, values, token) => {
    return manageRequest(
      signal,
      'getMerchantByName',
      values,
      'normal',
      'normal',
      'get',
      token,
      undefined,
    );
  },
  deleteMerchant: (signal, values, token) => {
    return manageRequest(
      signal,
      'deleteMerchant',
      values,
      'normal',
      'normal',
      'delete',
      token,
      undefined,
    );
  },
  updateMerchant: (signal, values, token) => {
    return manageRequest(
      signal,
      'updateMerchant',
      values,
      'normal',
      'normal',
      'put',
      token,
      undefined,
    );
  },
  createMerchant: (signal, values, token) => {
    return manageRequest(
      signal,
      'createMerchant',
      values,
      'normal',
      'normal',
      'post',
      token,
      undefined,
    );
  }


};

export default merchantUseCases;
