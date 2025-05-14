export const getMerchantDictionary = {
  id: (key, value, responseBody) => {
    const response = { key: `${value}-${responseBody.name}`, id: value };
    delete [key];
    return response;
  },
  status: (key, value) => {
    const response = { status: value === "ACTIVE" ? "activo" : "desactivado" };
    delete [key];
    return response;
  },
};
