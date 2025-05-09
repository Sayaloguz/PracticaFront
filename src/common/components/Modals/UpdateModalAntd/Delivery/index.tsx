import { Modal } from "antd";
import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import { FC } from "react";

interface UpdateModalAntdProps {
  // TODO: Controlar los posibles títulos ya que puede afectar a la lógica
  title: string;
  open: boolean;
  // TODO: Ver como cambiar a tipo específico pudiendo ser client o merchant en vez de any
  onSubmit: (updated: any) => void;
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

const UpdateModalAntd: FC<UpdateModalAntdProps> = ({
  title,
  open,
  onCancel,
  onSubmit,
  initialData,
}) => {
  return (
    <Modal title={title} open={open} onCancel={onCancel} footer={null} centered>
      {title === "Actualizar cliente" && (
        <ClientForm
          action="updateClient"
          onCancel={onCancel}
          onSuccess={(updatedClient) => {
            onSubmit(updatedClient);
          }}
          initialData={initialData}
        />
      )}

      {title === "Actualizar merchant" && (
        <MerchantForm
          action="updateMerchant"
          onCancel={onCancel}
          onSuccess={onSubmit}
          initialData={initialData}
        />
      )}
    </Modal>
  );
};

export default UpdateModalAntd;
