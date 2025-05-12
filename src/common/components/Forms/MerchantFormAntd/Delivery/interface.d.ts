export interface MerchantFormAntdProps {
  action: string;
  onCancel?: () => void;
  onSuccess?: (merchant: Utility.Merchant) => void;
  initialData?: {
    id: string;
    name: string;
    address: string;
    merchantType: string;
    gindexClient: string;
  };
}
