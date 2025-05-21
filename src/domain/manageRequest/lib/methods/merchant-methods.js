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
  getByClientId: (response) => {
    const normalizedData = normalize(response.data, "getByClientId");

    return { data: normalizedData };
  },
  getMerchantsByName: (response) => {
    const normalizedData = normalize(response.data, "getMerchantsByName");

    return { data: normalizedData };
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
