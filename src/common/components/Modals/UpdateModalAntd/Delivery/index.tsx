import { Modal } from "antd";
import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import { FC } from "react";
import { UpdateModalAntdProps } from "./interface";

// Cliente | Merchant

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
