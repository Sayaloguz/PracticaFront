"use client";

import { FC, useState } from "react";
import MerchantRow from "../../MerchantRow/Delivery";

interface Merchant {
  id: string;
  name: string;
  address: string;
  merchantType: string;
  gindexClient: string;
}

interface MerchantsTableProps {
  initialData: Merchant[];
}

const MerchantsTable: FC<MerchantsTableProps> = ({ initialData }: MerchantsTableProps) => {
  const [merchants, setMerchants] = useState(initialData);

  const handleDeleted = (id: string) => {
    setMerchants((prev) => prev.filter((c) => c.id !== id));
  };

  if (merchants.length === 0) return <p>No hay resultados</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantsTable;
