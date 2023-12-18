// FilterComponent.jsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import SearchInput from "@/components/homepage/SearchInput";
import FilterButton from "@/components/searchpage/FilterButton";
import useDapilStore from "@/components/ZustandStore/useDapilStore";
import { IoChevronBack } from "react-icons/io5";

const FilterComponent = ({ provinsiname }) => {
  const {
    dapils,
    selectedProvinsi,
    setSelectedProvinsi,
    setSelectedKabupaten,
    setSelectedKecamatan,
    selectedKabupaten,
    selectedKecamatan,
    initializeData, // Use the initializeData function
    getProvinces,
    getKabupatenList,
  } = useDapilStore();

  useEffect(() => {
    setSelectedProvinsi(provinsiname); // Set selectedProvinsi from props
    initializeData(); // Initialize data on component mount
  }, [provinsiname, setSelectedProvinsi, initializeData]);

  const handleSearch = (searchValue) => {
    setSelectedProvinsi(searchValue);
  };

  const kabupatenList = getKabupatenList();
  const kabupatenButtons = kabupatenList.map((kab) => (
    <FilterButton
      key={kab.nama}
      name={kab.nama}
      onClick={() => setSelectedKabupaten(kab.nama)}
    />
  ));

  const kecamatanList = selectedKabupaten
    ? dapils
        .flatMap((dapil) => dapil.kabupaten)
        .find((kab) => kab.nama === selectedKabupaten)?.kecamatan || []
    : [];

  const kecamatanButtons = kecamatanList.map((kec) => (
    <FilterButton
      key={kec.nama}
      name={kec.nama}
      onClick={() => setSelectedKecamatan(kec.nama)}
    />
  ));

  const provinsiButtons = getProvinces().map((provinsi) => (
    <FilterButton
      key={provinsi}
      name={provinsi}
      onClick={() => setSelectedProvinsi(provinsi)}
    />
  ));

  const kelurahanList = selectedKecamatan
    ? kecamatanList.find((kec) => kec.nama === selectedKecamatan)?.kelurahan ||
      []
    : [];

  const kelurahanButtons = kelurahanList.map((kel) => (
    <FilterButton key={kel.nama} name={kel.nama} />
  ));

  return (
    <div className="mt-32">
      <SearchInput onSearch={handleSearch} />
      <Link href={"/searchPage"}>
        <div className="flex justify-start items-center gap-2 mt-5">
          <IoChevronBack size={30} style={{
      color: '#D2355F',
    }}/>
          <h3 className="text-xl font-bold">{provinsiname}</h3>
        </div>
      </Link>

      
      <div className="mt-10">
        <div>
          <h1 className="text-center font-bold">PILIH KABUPATENMU</h1>
          <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
            {kabupatenButtons}
          </div>
        </div>

        {selectedKabupaten && (
          <div className="mt-10 ">
            <h1 className="text-center font-bold">PILIH KECAMATANMU</h1>
            <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
              {kecamatanButtons}
            </div>
          </div>
        )}

        {selectedKecamatan && (
          <div className="mt-10">
            <h1 className="text-center font-bold">PILIH KELURAHANMU</h1>
            <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
              {kelurahanButtons}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
