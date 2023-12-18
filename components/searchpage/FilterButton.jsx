import React from "react";

const FilterButton = ({ name, onClick }) => {
  return (
    <div className="border rounded-lg max-w-fit p-2 border-abu hover:bg-black text-abu  hover:text-white">
      <button
        onClick={onClick} // Use the onClick prop here
      >
        <h1 className="">{name}</h1>
      </button>
    </div>
  );
};

export default FilterButton;
