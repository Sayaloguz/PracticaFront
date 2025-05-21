"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input, Select } from "antd";
import { useState, useEffect } from "react";

const { Option } = Select;

const SearchMerchant = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const initialField =
    (searchParams.get("field") as "name" | "clientId") || "name";

  const [query, setQuery] = useState(initialQuery);
  const [field, setField] = useState<"name" | "clientId">(initialField);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams();
      if (query) params.set("query", query);
      if (field) params.set("field", field);

      router.push(`/merchants?${params.toString()}`);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, field]);

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
      />
    </div>
  );
};

export default SearchMerchant;
