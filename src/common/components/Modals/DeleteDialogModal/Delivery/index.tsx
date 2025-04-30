"use client";
import React from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  type: string;
  name?: string; 
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen, 
  type, // referencia a qué estamos borrando
  name,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {/* AQUÍ */}
          ¿Estás seguro que quieres borrar este { type }?
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          { name } será eliminado de forma permanente. Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;