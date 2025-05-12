import { Modal } from "antd";
import { FC } from "react";
import { UpdateModalAntdProps } from "./interface";
import MerchantFormAntd from "@/common/components/Forms/MerchantFormAntd/Delivery";
import ClientFormAntd from "@/common/components/Forms/ClientFormAntd/Delivery";

// Cliente | Merchant

const UpdateModalAntd: FC<UpdateModalAntdProps> = ({
  title,
  action,
  open,
  onCancel,
  onSubmit,
  initialData,
}) => {
  return (
    <Modal title={title} open={open} onCancel={onCancel} footer={null} centered>
      {action === "updateClient" && (
        <ClientFormAntd
          action={action}
          onCancel={onCancel}
          onSuccess={(updatedClient) => {
            onSubmit(updatedClient);
          }}
          initialData={initialData}
        />
      )}

      {action === "updateMerchant" && (
        <MerchantFormAntd
          action={action}
          onCancel={onCancel}
          onSuccess={onSubmit}
          initialData={initialData}
        />
      )}
    </Modal>
  );
};

export default UpdateModalAntd;
