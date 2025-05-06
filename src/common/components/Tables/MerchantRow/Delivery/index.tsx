"use client";

import { useState } from "react";
import Icon from "../../../Icon/Delivery";
import { handleDelete } from "../Infrastructure/handleActions";
import DeleteModal from "../../../Modals/DeleteModal/Delivery/index";
import IconToast from "../../../Toast/IconToast/Delivery";
import UpdateModal from "../../../Modals/UpdateModal/Delivery";

interface Merchant {
  id: string;
  name: string;
  address: string;
  merchantType: string;
  gindexClient: string;
}

interface MerchantRowProps {
  merchant: Merchant;
  isEven: boolean;
  onDeleted: (id: string) => void;
  onUpdated: (merchant: Merchant) => void;
}

const MerchantRow = ({ merchant, isEven, onDeleted, onUpdated }: MerchantRowProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <tr className={`${isEven ? "bg-white" : "bg-gray-50"} border-b hover:bg-gray-100`}>
        <td className="px-6 py-4">{merchant.name}</td>
        <td className="px-6 py-4">{merchant.address}</td>
        <td className="px-6 py-4">{merchant.merchantType}</td>
        <td className="px-6 py-4">{merchant.gindexClient}</td>
        <td className="px-6 py-4 flex gap-3">
          <button onClick={() => setShowDeleteModal(true)} className="text-red-600 hover:underline">
            <Icon id="delete" />
          </button>
          <button onClick={() => setShowUpdateModal(true)} className="text-blue-600 hover:underline">
            <Icon id="edit" />
          </button>
          <button onClick={() => setShowDeleteModal(true)} className="text-green-600 hover:underline">
            <Icon id="info" />
          </button>
        </td>
      </tr>

      {showDeleteModal && (
        <DeleteModal
          title="Eliminar merchant"
          message={`¿Estás seguro de que deseas eliminar el merchant ${merchant.name}?`}
          onConfirm={async () => {
            const result = await handleDelete({ merchantId: merchant.id, onDeleted });
            if (result.success) {
              setShowDeleteModal(false);
              setShowToast(true);
            }
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showUpdateModal && (
        <UpdateModal
          title="Actualizar merchant"
          id={merchant.id}
          initialData={merchant}
          onSubmit={(updated) => {
            onUpdated(updated);
            setShowUpdateModal(false);
            setShowToast(true);
          }}
          onConfirm={() => setShowUpdateModal(false)}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}

      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <IconToast
            icon="delete"
            message="Acción realizada con éxito."
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </>
  );
};

export default MerchantRow;
