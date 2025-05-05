'use client';

import { useState } from "react";
import Icon from "../../../Icon/Delivery";
import { handleDelete } from "../Infrastructure/handleActions";
import DeleteModal from "../../../Modals/DeleteModal/Delivery/index";
import IconToast from "../../../Toast/IconToast/Delivery";

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
  onDeleted: (id: string) => void; // Para actualizar la lista
}

const MerchantRow = ({ merchant, isEven, onDeleted }: MerchantRowProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const onClickDelete = () => {
    setShowDeleteModal(true);
  };

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
            onClick={onClickDelete}
            className="text-red-600 hover:underline"
          >
            <Icon id="delete" />
          </button>

          <button
            onClick={onClickDelete}
            className="text-blue-600 hover:underline"
          >
            <Icon id="edit"/>
          </button>

          <button
            onClick={onClickDelete}
            className="text-green-600 hover:underline"
          >
            <Icon id="info"/>
          </button>

          <a href={`/merchant/edit?id=${merchant.id}`} >
            Editar
          </a>
        </td>
      </tr>

      {showDeleteModal && (
        <DeleteModal
          title="Eliminar merchant"
          message={`¿Estás seguro de que deseas eliminar el merchant ${merchant.name}?`}
          onConfirm={() => {
            handleDelete({ merchantId: merchant.id, onDeleted });
            setShowDeleteModal(false);
            setShowToast(true);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <IconToast 
            icon="delete"
            message={`Merchant ${merchant.name} ${merchant.surname} eliminado con éxito.`}
          />
        </div>
      )}
    </>

  );
};


export default MerchantRow;
