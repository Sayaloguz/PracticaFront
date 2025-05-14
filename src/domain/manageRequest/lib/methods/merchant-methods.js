import { normalize } from "../../../manageNormalize";

export const MERCHANT_METHODS = {
  // getMerchants, getMerchantById, getMerchantsByName, deleteMerchant, updateMerchant, createMerchant

  getMerchants: (response) => {
    const normalizedData = normalize(response.data, "getMerchant");

    return { data: normalizedData };
  },
  getMerchantById: (response) => {
    return response;
  },
  getMerchantsByName: (response) => {
    return response;
  },
  deleteMerchant: (response) => {
    return response;
  },
  updateMerchant: (response) => {
    return response;
  },
  createMerchant: (response) => {
    return response;
  },
};
