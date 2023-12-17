// FilterComponent.jsx
"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import SearchInput from "@/components/homepage/SearchInput";
import FilterButton from "@/components/searchpage/FilterButton";
import useDapilStore from "@/components/ZustandStore/useDapilStore";

const FilterComponent = ({provinsiname}) => {
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
    <div className="my-32">
      <Link href={"/searchPage"}>
        <span className="text-xl font-bold">
          <FaArrowLeft /> BACK TO
        </span>
      </Link>
      <h1>Provinsi : {provinsiname}</h1>

      <SearchInput />
      <div className="my-4">
        <div>
          <h1 className="text-center">PILIH KABUPATENMU</h1>
          <div className="flex flex-row justify-center space-x-2">
            {kabupatenButtons}
          </div>
        </div>

        {selectedKabupaten && (
          <div>
            <h1 className="text-center">PILIH KECAMATANMU</h1>
            <div className="flex flex-row justify-center space-x-2">
              {kecamatanButtons}
            </div>
          </div>
        )}

        {selectedKecamatan && (
          <div>
            <h1 className="text-center">PILIH KELURAHANMU</h1>
            <div className="flex flex-row justify-center space-x-2">
              {kelurahanButtons}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
