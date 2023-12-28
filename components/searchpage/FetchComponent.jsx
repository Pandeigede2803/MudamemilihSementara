import React, { useEffect, useState } from "react";
import useDataStore from "@/components/ZustandStore/useDatastore";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

export default function FetchComponent() {
  const {
    data,
    fetchData,
    selectedProvinsi,
    setSelectedProvinsi,
    selectedKabKota,
    setSelectedKabKota,
  } = useDataStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    selectedProvinsi: state.selectedProvinsi,
    setSelectedProvinsi: state.setSelectedProvinsi,
    selectedKabKota: state.selectedKabKota,
    setSelectedKabKota: state.setSelectedKabKota,
  }));

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const uniqueProvinsi = data
    ? [...new Set(data.map((item) => item.attributes.provinsi))]
    : [];

  const kabKotaByProvinsi = selectedProvinsi
    ? [
        ...new Set(
          data
            .filter((item) => item.attributes.provinsi === selectedProvinsi)
            .map((item) => item.attributes.kab_kota)
        ),
      ]
    : [];

  return (
    <div className="mb-10 mt-10 font-sans mx-6">
      <Link href={"/searchPage"}>
        <div className="flex justify-start  items-center gap-2 mt-5 mb-5">
          <IoChevronBack
            size={30}
            style={{
              color: "#D2355F",
            }}
          />
          <h3 className="text-xl font-sans font-medium  font-bold">{selectedProvinsi}</h3>
        </div>
      </Link>

      <div className=" space-y-2 font-sans ">
        <h1 className=" text-xl text-center font-sans mb-5 ">
          Pilih Provinsi dimana kamu tinggal
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {uniqueProvinsi.map((provinsi) => (
            <button
              key={provinsi}
              className="bg-white border hover:bg-primary hover:text-white text-abu font-sans py-2 px-4 rounded-lg text-sm"
              onClick={() => {
                setSelectedProvinsi(provinsi);
                setSelectedKabKota(null);
              }}
            >
              {provinsi}
            </button>
          ))}
        </div>

        {selectedProvinsi && (
          <div className=" space-y-6 font-sans">
            <h1 className="font-sans text-center mt-6  text-xl">
              Pilih Kabupaten/Kota kamu tinggal {selectedProvinsi}:
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
              {kabKotaByProvinsi.map((kabKota) => (
                <button
                  key={kabKota}
                  className="bg-white border hover:bg-primary hover:text-white text-abu text-sm font-sans py-2 px-4 rounded-lg"
                  onClick={() => setSelectedKabKota(kabKota)}
                >
                  {kabKota}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Implementasi lebih lanjut untuk Kelurahan jika diperlukan */}
      </div>
    </div>
  );
}

// flex gap-5 flex-wrap justify-center items-center
