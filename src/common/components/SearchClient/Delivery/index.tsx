"use client";

import SearchIcon from "../../Icon/SearchIcon";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import SelectAntd from "../../SelectAntd/Delivery";
import { useState } from "react";

export default function SearchClient({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const fieldFromUrl = searchParams.get("field") || "name";
  const [searchField, setSearchField] = useState(fieldFromUrl);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    // Aseguramos que el campo también se mantenga en la URL
    params.set("field", searchField);

    replace(`${pathname}?${params.toString()}`);
  }, 600);

  const selectOptions = [
    { value: "name", label: "Nombre" },
    { value: "email", label: "Email" },
  ];

  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0 ">
        <label htmlFor="query" className="sr-only">
          Search
        </label>
        <input
          onChange={(event) => handleSearch(event.target.value)}
          type="text"
          id="query"
          className="block ml-4 mr-4 w-full rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600"
          placeholder={placeholder}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="ml-3 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </div>
      </div>
      <SelectAntd
        value={searchField}
        onChange={(value) => {
          setSearchField(value);

          const params = new URLSearchParams(searchParams);
          params.set("field", value); // ✅ importante
          replace(`${pathname}?${params.toString()}`);
        }}
        options={selectOptions}
      />
    </>
  );
}
