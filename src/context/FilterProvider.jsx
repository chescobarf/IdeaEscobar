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
  const [actualFilter, setActualFilter] = useState(filters[0].name);

  const handleSort = (data) => {
    switch (actualFilter) {
      case filters[1].name:
        data.sort((a, b) => {
          return b.newPrice - a.newPrice;
        });
        break;

      case filters[2].name:
        data.sort((a, b) => {
          return a.newPrice - b.newPrice;
        });
        break;

      case filters[0].name:
        return data;

      default:
        return data;
    }
  };
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
        handleSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
