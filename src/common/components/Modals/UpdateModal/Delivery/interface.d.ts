export interface UpdateModalProps {
  title: string;
  onSubmit: (updated: Utility.Client | Utility.Merchant) => void;
  onCancel: () => void;
  initialData: {
    id: string;
    name: string;
    address?: string;
    merchantType?: string;
    gindexClient?: string;
    cifNifNie?: string;
    surname?: string;
    phone?: string;
    email?: string;
  };
}
