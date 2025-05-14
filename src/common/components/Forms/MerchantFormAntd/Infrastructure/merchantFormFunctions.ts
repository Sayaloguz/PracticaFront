const merchantTypeMapObject: Record<string, string> = {
  "Personal Services": "MERCHANT_TYPE_PERSONAL_SERVICES",
  "Financial Services": "MERCHANT_TYPE_FINANCIAL_SERVICES",
};

const reverseMerchantTypeMapObject: Record<string, string> = {
  MERCHANT_TYPE_PERSONAL_SERVICES: "Personal Services",
  MERCHANT_TYPE_FINANCIAL_SERVICES: "Financial Services",
};

export function merchantTypeMap(type: string): string | undefined {
  return merchantTypeMapObject[type];
}

export function reverseMerchantTypeMap(type: string): string | undefined {
  return reverseMerchantTypeMapObject[type];
}
