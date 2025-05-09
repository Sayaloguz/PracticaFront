// getMerchants, getMerchantById, getMerchantsByName, deleteMerchant, updateMerchant, createMerchant

export const MERCHANT_QUERIES = {
    // getMerchant: () => `${process.env.MERCHANT_API_URL}/getMerchants`,
    getMerchants: () => `http://localhost:8082/api/getMerchants`,
    getMerchantById: ({id}) => `http://localhost:8082/api/getById/${id}`,
    getMerchantsByName: ({name}) => `http://localhost:8082/api/getByName/${name}`,
    updateMerchant: () => `http://localhost:8082/api/update`,
    deleteMerchant: ({id}) => `http://localhost:8082/api/deleteMerchant/${id}`,
    createMerchant: () => `http://localhost:8082/api/create`
  };
  
  
  export const MERCHANT_ERROR_MESSAGES = {
    // exampleQuery:'error'
    merchantQuery: 'error' // 
  }