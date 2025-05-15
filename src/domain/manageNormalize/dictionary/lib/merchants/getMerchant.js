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
  merchantType: (key, value, responseBody) => {
    const prefix = "MERCHANT_TYPE_";

    if (!responseBody.merchantType.startsWith(prefix)) {
      throw new Error("Invalid merchant type");
    }

    const merchantTypeNormalized = responseBody.merchantType
      .substring(prefix.length)
      .split("_")
      .filter((word) => word)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const response = { merchantType: merchantTypeNormalized };

    delete [key];
    return response;
  },
};
