"use client";

import { FC, useState } from "react";
import MerchantRow from "../../MerchantRow/Delivery";
import { MerchantsTableProps } from "./interface";

const MerchantsTable: FC<MerchantsTableProps> = ({ tableData }) => {
  const [merchants, setMerchants] = useState(tableData);

  const handleDeleted = (id: string) => {
    setMerchants((prev) => prev.filter((c) => c.id !== id));
  };

  const handleUpdated = (updated: Utility.Merchant) => {
    setMerchants((prev) =>
      prev.map((m) => (m.id === updated.id ? updated : m))
    );
  };

  if (merchants.length === 0)
    return (
      <p className="mt-20 font-bold text-center">
        No hay merchants actualmente.
      </p>
    );

  return (
    <div className="ml-2 mr-2 relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">Dirección</th>
            <th className="px-6 py-3">Tipo de merchant</th>
            <th className="px-6 py-3">Cliente</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant, index) => (
            <MerchantRow
              key={merchant.id}
              merchant={merchant}
              isEven={index % 2 === 0}
              onDeleted={handleDeleted}
              onUpdated={handleUpdated}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantsTable;
