import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import SecondaryTitle from "@/common/components/Titles/SecondaryTitle";
import { FC } from "react";

interface UpdateModalProps {
  title: string;
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

const UpdateModal: FC<UpdateModalProps> = ({
  title,
  onCancel,
  onSubmit,
  initialData,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="relative p-4 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <SecondaryTitle title={title} />

          {title === "Actualizar cliente" && (
            <ClientForm
              action="updateClient"
              onCancel={onCancel}
              onSuccess={(updatedClient) => {
                onSubmit(updatedClient); // Pasa los datos actualizados al padre
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
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
