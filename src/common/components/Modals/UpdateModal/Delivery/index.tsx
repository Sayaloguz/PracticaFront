import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import { FC } from "react";

interface UpdateModalProps {
  title: string;
  id: string;
  onSubmit: () => void;     // Se llamará después de submit correcto
  onConfirm: () => void;    // Cierre forzado
  onCancel: () => void;
}

const UpdateModal: FC<UpdateModalProps> = ({ title, id, onConfirm, onCancel, onSubmit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="relative p-4 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>

          {title === "Actualizar cliente" && (
            <ClientForm
              id={id}
              action="updateClient"
              onCancel={onCancel}
            />
          )}

          {title === "Actualizar merchant" && (
            <MerchantForm
              id={id}
              action="updateMerchant"
              onCancel={onCancel}
            />
          )}

          {/* El botón externo que dispara la lógica de cierre, si necesario */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => {
                onSubmit(); // Cierra modal + feedback
              }}
              className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Guardar y cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
