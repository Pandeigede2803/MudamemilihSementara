"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import SearchInput from "@/components/homepage/SearchInput";
import FilterButton from "@/components/searchpage/FilterButton";
import useDapilStore from "@/components/ZustandStore/useDapilStore";

const FilterComponent = () => {
  const {
    dapils,
    selectedKabupaten,
    selectedKecamatan,
    fetchDapils,
    setSelectedKabupaten,
    setSelectedKecamatan
  } = useDapilStore();

  useEffect(() => {
    fetchDapils();
  }, [fetchDapils]);

  const kabupatenButtons = dapils
    .flatMap((dapil) => dapil.kabupaten)
    .map((kab) => (
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
        <FaArrowLeft /> BACK
      </Link>
      <SearchInput />
      <div className="my-4">
        {/* Section for displaying kabupaten buttons */}
        <div>
          <h1 className="text-center">PILIH KABUPATENMU</h1>
          <div className="flex flex-row justify-center space-x-2">
            {kabupatenButtons}
          </div>
        </div>

        {/* Section for displaying kecamatan buttons */}
        {selectedKabupaten && (
          <div>
            <h1 className="text-center">PILIH KECAMATANMU</h1>
            <div className="flex flex-row justify-center space-x-2">
              {kecamatanButtons}
            </div>
          </div>
        )}

        {/* Section for displaying kelurahan buttons */}
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
