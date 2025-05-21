import manageRequest from "@/domain/manageRequest";

// getMerchants, getMerchantById, getMerchantsByName, deleteMerchant, updateMerchant, createMerchant
const merchantUseCases = {
  getMerchants: (signal, values, token) => {
    return manageRequest(
      signal,
      "getMerchants",
      values,
      "query",
      "normal",
      "get",
      token,
      undefined
    );
  },
  getMerchantById: (signal, values, token) => {
    return manageRequest(
      signal,
      "getMerchantById",
      values,
      "normal",
      "normal",
      "get",
      token,
      undefined
    );
  },
  getMerchantsByName: (signal, values, token) => {
    return manageRequest(
      signal,
      "getMerchantsByName",
      values,
      "normal",
      "normal",
      "get",
      token,
      undefined
    );
  },
  deleteMerchant: (signal, values, token) => {
    return manageRequest(
      signal,
      "deleteMerchant",
      values,
      "normal",
      "normal",
      "delete",
      token,
      undefined
    );
  },
  getByClientId: (signal, values, token) => {
    return manageRequest(
      signal,
      "getByClientId",
      values,
      "normal",
      "normal",
      "post",
      token,
      undefined,
      {
        "Content-Type": "application/json",
      }
    );
  },
  updateMerchant: (signal, values, token) => {
    return manageRequest(
      signal,
      "updateMerchant",
      values,
      "normal",
      "normal",
      "put",
      token,
      undefined,
      {
        "Content-Type": "application/json",
      }
    );
  },
  createMerchant: (signal, values, token) => {
    return manageRequest(
      signal,
      "createMerchant",
      values,
      "normal",
      "normal",
      "post",
      token,
      undefined,
      {
        "Content-Type": "application/json",
      }
    );
  },
};

export default merchantUseCases;
