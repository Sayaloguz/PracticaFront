export interface MerchantRowProps {
  merchant: Utility.Merchant;
  isEven: boolean;
  onDeleted: (id: string) => void;
  onUpdated: (merchant: Utility.Merchant) => void;
}
