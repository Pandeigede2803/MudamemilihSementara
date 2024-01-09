"use client";

import React, { useState, useEffect } from "react";
// import Card from "../../components/searchpage/Card"; // Uncomment if used
// import Filter from "../../components/searchpage/filter"; // Uncomment if used
// import CardData from "../../components/searchpage/CardData"; // Uncomment if used
import { useRouter } from "next/router"; // Corrected import for Next.js router
import useDataStore from "@/components/ZustandStore/useDatastore";
import API_ENDPOINTS from "@/config";
import SearchInput from "../../components/homepage/SearchInput"
import { IoChevronBack } from "react-icons/io5";
import Dpr from '../../components/searchpage/Dpr'
import Dprd from '../../components/searchpage/Dprd'

function Page() {
  const { data, searchParam, fetchData } = useDataStore();

  useEffect(() => {
    if (searchParam) {
      const apiUrl = `${API_ENDPOINTS.searchDapils}?search=${searchParam}`;
      console.log("API URL:", apiUrl); // Log the API URL
      fetchData(); // Optional: Call fetchData if you want to fetch data whenever searchParam changes
    }
  }, [searchParam, fetchData]);

  return (
    <div className="mt-32">
      {/* <Filter onFilterChange={handleFilterChange} /> */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1>Hasil Pencarian untuk Kecamatan</h1>
        <ul>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <li key={index}>{JSON.stringify(item, null, 2)}</li>
            ))}
        </ul>
      </div>

      <div className="mt-[100px] px-10">
        <SearchInput />
        <div className="flex justify-start items-center gap-2 mt-5">
          <IoChevronBack
            size={30}
            style={{
              color: "#D2355F",
            }}
          />
          <h3 className="text-xl font-bold">Nama Provinsi</h3>
        </div>
        <div className="flex gap-10 mt-3 ml-4">
          <button className="font-semibold text-slate-700">SEMUA</button>
          <button className="font-semibold text-slate-700">DPR</button>
          <button className="font-semibold text-slate-700">DPRD Prov</button>
          <button className="font-semibold text-slate-700">
            DPRD Kab/Kota
          </button>
          <button className="font-semibold text-slate-700">DPD</button>
        </div>
        <div className="max-w-screen-xl flex flex-col gap-10 mx-auto p-5 sm:p-10 md:p-16">
          <Dpr />
          <Dprd />
        </div>
      </div>
    </div>
  );
}

export default Page;
