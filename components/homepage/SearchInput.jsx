// SearchInput.jsx
"use client"


import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="">
      <h4 className="text-secondary font-sans">Cari Daerah Pilihanmu!</h4>
      <div className="bg-white py-4 px-8 rounded-lg shadow-2xl">
        <form onSubmit={handleFormSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoLocationSharp className=" text-2xl"/>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-md font-sans text-gray-900 text-sm rounded-lg bg-transparent"
              placeholder="Provinsi/Kab/Kota..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              required
            />
            <button
              type="submit"
              className="md:w-[240px] flex flex-row text-center align-middle justify-center text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-accent hover:text-primary hover:border-neutral-500 hover:border focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:p-4 p-4 -mb-2"
            >
              <FaSearch className="hidden md:flex text-center my-auto text-white font-sans mr-4 hover:text-primary" />
              <h4 className="md:text-lg text-md font-sans">Cari Kandidat</h4>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
