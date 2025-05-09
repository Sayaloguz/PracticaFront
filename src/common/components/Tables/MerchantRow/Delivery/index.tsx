"use client";

import { useState } from "react";
import Icon from "../../../Icon/Delivery";
import DeleteModalAntd from "../../../Modals/DeleteModalAntd/Delivery";
import UpdateModalAntd from "../../../Modals/UpdateModalAntd/Delivery";
import { toast } from "react-toastify";
import Service from "@/service/src";

// TODO: Sacarlo a un componente servidor
async function handleDelete({
  merchantId,
  onDeleted,
}: {
  merchantId: string;
  onDeleted: (id: string) => void;
}) {
  try {
    await Service.useCases("deleteMerchant", {
      endPointData: { id: merchantId },
    });
    onDeleted(merchantId);

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error al eliminar merchant:", error);
    return { success: false, message: String(error) };
  }
}

const MerchantRow = ({
  merchant,
  isEven,
  onDeleted,
  onUpdated,
}: MerchantRowProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <tr
        className={`${
          isEven ? "bg-white" : "bg-gray-50"
        } border-b hover:bg-gray-100`}
      >
        <td className="px-6 py-4">{merchant.name}</td>
        <td className="px-6 py-4">{merchant.address}</td>
        <td className="px-6 py-4">{merchant.merchantType}</td>
        <td className="px-6 py-4">{merchant.gindexClient}</td>
        <td className="px-6 py-4 flex gap-3">
          <button
            onClick={() => setShowDeleteModal(true)}
            className="text-red-600 hover:underline"
          >
            <Icon id="delete" />
          </button>
          <button
            onClick={() => setShowUpdateModal(true)}
            className="text-blue-600 hover:underline"
          >
            <Icon id="edit" />
          </button>
        </td>
      </tr>

      {showDeleteModal && (
        <DeleteModalAntd
          title="Eliminar merchant"
          message={`¿Estás seguro de que deseas eliminar el merchant ${merchant.name}?`}
          open={showDeleteModal}
          onConfirm={async () => {
            const result = await handleDelete({
              merchantId: merchant.id,
              onDeleted,
            });
            setShowDeleteModal(false);

            if (result.success) {
              toast.success("Merchant eliminado con éxito", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else {
              toast.error(`Error: ${result.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showUpdateModal && (
        <UpdateModalAntd
          title="Actualizar merchant"
          open={showUpdateModal}
          initialData={merchant}
          onSubmit={(updated) => {
            onUpdated(updated);
            setShowUpdateModal(false);
          }}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </>
  );
};

export default MerchantRow;
