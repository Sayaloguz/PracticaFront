export interface ClientFormAntdProps {
  action: string;
  onSuccess?: (data: Utility.Client) => void;
  onCancel?: () => void;
  initialData?: {
    id: string;
    cifNifNie: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
  };
}
