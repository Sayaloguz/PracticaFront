export interface UpdateModalAntdProps {
  // TODO: Pasar el action y controlar desde ahí el formulario que se va a presentar
  title: string;
  open: boolean;
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
