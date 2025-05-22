"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input, Select } from "antd";
import { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const SearchMerchant = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Leer parámetros de la URL
  const nameParam = searchParams.get("name");
  const clientIdParam = searchParams.get("clientId");

  const initialQuery = nameParam || clientIdParam || "";
  const initialField = clientIdParam ? "clientId" : "name";

  const [query, setQuery] = useState(initialQuery);
  const [field, setField] = useState<"name" | "clientId">(initialField);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        const param =
          field === "name"
            ? `name=${encodeURIComponent(query)}`
            : `clientId=${encodeURIComponent(query)}`;
        router.push(`/merchants?${param}`);
      } else {
        router.push("/merchants");
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, field, router]);

  return (
    <div className="flex gap-4 w-full">
      <Select
        value={field}
        onChange={(value) => setField(value as "name" | "clientId")}
        style={{ width: 140 }}
      >
        <Option value="name">Nombre</Option>
        <Option value="clientId">Client ID</Option>
      </Select>

      <Input
        placeholder={`Buscar merchant por ${
          field === "name" ? "nombre" : "Client ID"
        }`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        allowClear
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchMerchant;
