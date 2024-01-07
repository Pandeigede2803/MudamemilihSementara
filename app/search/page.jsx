"use client"

import React, { useState, useEffect } from "react";
// import Card from "../../components/searchpage/Card"; // Uncomment if used
// import Filter from "../../components/searchpage/filter"; // Uncomment if used
// import CardData from "../../components/searchpage/CardData"; // Uncomment if used
import { useRouter } from "next/router"; // Corrected import for Next.js router
import useDataStore from "@/components/ZustandStore/useDatastore";
import API_ENDPOINTS from "@/config"; 

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
          {Array.isArray(data) && data.map((item, index) => (
            <li key={index}>
              {JSON.stringify(item, null, 2)}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Page;

