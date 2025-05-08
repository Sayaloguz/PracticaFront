import { Modal } from "antd";
import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import SecondaryTitle from "@/common/components/Titles/SecondaryTitle";
import { FC } from "react";

interface UpdateModalAntdProps {
  title: string;
  open: boolean; // Controla la visibilidad del modal
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
    <Modal
      title={<SecondaryTitle title={title} />}
      open={open}
      onCancel={onCancel}
      footer={null} // Eliminamos el footer para personalizar los botones dentro de los formularios
      centered
    >
      {title === "Actualizar cliente" && (
        <ClientForm
          action="updateClient"
          onCancel={onCancel}
          onSuccess={(updatedClient) => {
            onSubmit(updatedClient); // Datos actualizados
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