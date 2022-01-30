import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FilterConsumer } from "../../context/FilterProvider";

function Filter({ categoryFilter }) {
  const { handleShow, actualFilter, showFilters, filters, handleFilter } =
    FilterConsumer();

  return (
    <div className="flex justify-between items-center mb-5 uppercase p-2.5 border-b-2 border-purple-300 relative">
      <h2 className="text-xl md:text-3xl italic font-medium">
        {categoryFilter ? `Sneakers de ${categoryFilter}` : `Sneakers`}
      </h2>
      <div className="orderBy">
        <div className="flex items-center">
          <span
            id="order"
            className="cursor-pointer flex gap-2"
            onClick={handleShow}
          >
            {actualFilter}
          </span>
          <RiArrowDownSLine />
        </div>

        {showFilters ? (
          <ul className="absolute right-0 top-14 bg-white border-l-2 border-r-2 border-purple-300 z-10 ">
            {filters.map((e) => (
              <li
                className="p-3 cursor-pointer border-b-2 border-purple-300 hover:bg-purple-300"
                onClick={() => handleFilter(e.name)}
                key={e.id}
              >
                {e.name}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="absolute right-0 top-14 bg-white border-l-2 border-r-2 border-purple-300 z-10 hidden">
            {filters.map((e) => (
              <li
                className="p-3 cursor-pointer border-b-2 border-purple-300 hover:bg-purple-300"
                onClick={() => handleFilter(e.name)}
                key={e.id}
              >
                {e.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Filter;
