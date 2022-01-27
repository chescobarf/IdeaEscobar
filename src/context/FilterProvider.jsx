import React, { createContext, useContext, useState } from "react";
const FilterContext = createContext();

export const FilterConsumer = () => useContext(FilterContext);

function FilterProvider({ children }) {
  const filters = [
    { id: 0, name: "Ordenar Por" },
    { id: 1, name: "Precio Mayor a Menor" },
    { id: 2, name: "Precio Menor a Mayor" },
  ];
  const [showFilters, setShowFilters] = useState(false);
  const [actualFilter, setActualFilter] = useState("Ordenar Por");

  const handleFilter = (e) => {
    handleShow();
    setActualFilter(e);
  };
  const handleShow = () => {
    showFilters ? setShowFilters(false) : setShowFilters(true);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        showFilters,
        actualFilter,
        handleFilter,
        handleShow,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
