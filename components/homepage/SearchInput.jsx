import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="">
      <h4 className=" text-secondary font-sans">Cari Daerah Pilihanmu!</h4>
      <div className=" bg-white py-[20px] px-[20px] rounded-lg shadow-2xl ">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white" />
                <path
                  d="M4 10C4.00006 3.98668 8 2 12 2C16 2 20 4.4 20 10C20 15.6 14.6667 20.3333 12 22C9.16667 20.5 3.99994 16 4 10Z"
                  stroke="#D2355F"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="#D2355F"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-md font-sans text-gray-900 text-sm rounded-lg  bg-transparent "
              placeholder="Provinsi/Kab/Kota..."
              required
            />
            <button
              type="submit"
              className=" md:w-[240px] flex flex-row text-center align-middle justify-center text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-accent hover:text-primary hover:border-neutral-500 hover:border focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:p-4 p-4 -mb-2 "
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
