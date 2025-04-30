"use client";
import { FC, useEffect, useState } from "react";
import Service from "../../../../service/src/index";
import DeleteDialogModal from "../../Modals/DeleteDialogModal/Delivery/index";
import { ToastContainer, toast, Slide } from 'react-toastify';
//import { getActions } from "../Infrastructure/getActions";

interface TableProps {
  useCase: string;
  type: string;
  endPointData?: Record<string, any>;
  token?: string;
}

const Table: FC<TableProps> = ({ useCase, type, endPointData = {}, token = "" }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [entityToDelete, setEntityToDelete] = useState<any>(null); // AQUÍ

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    Service.useCases(useCase, {
      signal: controller.signal,
      endPointData,
      token,
    })
      .then((response: any) => {
        if (Array.isArray(response)) {
          setData(response);
        } else if (Array.isArray(response?.data)) {
          setData(response.data);
        } else {
          console.error("La respuesta no tiene formato de array:", response);
          setData([]);
        }
      })
      .catch((err: any) => {
        if (err.name !== "AbortError") {
          console.error("Error al traer los datos:", err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [useCase, JSON.stringify(endPointData), token]);

  const excludedColumns = ["id", "status", "createTime"];
  const columns =
    data.length > 0
      ? Object.keys(data[0]).filter((col) => !excludedColumns.includes(col))
      : [];

  const dataTable = data.map((row) => {
    const filteredRow = Object.keys(row)
      .filter((key) => !excludedColumns.includes(key))
      .reduce((acc, key) => {
        acc[key] = row[key];
        return acc;
      }, {} as Record<string, any>);

      /*
    filteredRow.delete = `${getActions(type).delete}?id=${row.id}`;
    filteredRow.edit = `${getActions(type).edit}?id=${row.id}`;
    filteredRow.info = `${getActions(type).info}?id=${row.id}`; */
    filteredRow.deleteUrl = `/clients/delete?id=${row.id}`; 
    filteredRow.editUrl = `/clients/edit?id=${row.id}`;
    filteredRow.deleteUrl = `/clients/delete?id=${row.id}`;
    filteredRow.infoUrl = `/clients/info?id=${row.id}`;
    filteredRow.id = row.id;

    return filteredRow;
  });

  const handleDeleteClick = (entity: any) => {
    setEntityToDelete(entity); // AQUÍ
    setShowModal(true);
  };

  const actionMap: Record<string, Record<string, string>> = {
    client: {
      delete: "deleteClient",
      edit: "editClient",
      update: "updateClient",
    },
    merchant: {
      delete: "deleteMerchant",
      edit: "editMerchant",
      update: "updateMerchant",
    },
  };

  const handleConfirmDelete = async () => {
    try {
      const deleteAction = actionMap[type]?.delete; // Obtener la acción dinámica según el tipo
  
      if (!deleteAction) {
        throw new Error(`No se encontró una acción de eliminación para el tipo: ${type}`);
      }
  
      await Service.useCases(deleteAction, {
        signal: undefined,
        endPointData: { id: entityToDelete.id },
        token,
      });
  
      setData((prev) => prev.filter((item) => item.id !== entityToDelete.id));
    } catch (error) {
      console.log(entityToDelete.id);
      console.error("Error al eliminar:", error);
    } finally {
      setShowModal(false);
      setEntityToDelete(null);
  
      toast.success("Success on delete", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (data.length === 0) return <p>No hay resultados</p>;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-7 py-3">
                  {col}
                </th>
              ))}
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-700"
                    : "bg-white dark:bg-gray-800"
                } border-b dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                {columns.map((col) => (
                  <td key={col} className="px-6 py-4">
                    {String(row[col])}
                  </td>
                ))}
                <td className="px-6 py-4 flex gap-2">
                  <a href={row.editUrl} title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </a>
                  <button
                    onClick={() => handleDeleteClick(row)}
                    title="Borrar"
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                  <a href={row.infoUrl} title="Info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteDialogModal
        isOpen={showModal} 
        type={ type } 
        name={entityToDelete?.name}
        onCancel={() => {
          setShowModal(false);
          setEntityToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
      />

      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
      />
    </div>
  );
};

export default Table;
