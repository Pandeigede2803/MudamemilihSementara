"use client";

import React, { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import useDataStore from "@/components/ZustandStore/useDatastore";
import provinsiData from "./ProvinsiJson";
import { useRouter } from "next/navigation";

export default function FetchComponent() {
  const {
    searchParam,
    setSearchParam,
    fetchData,
    data,
    selectedProvinsi,
    setSelectedProvinsi,
    selectedKabKota,
    setSelectedKabKota,
    selectedNama,
    setSelectedNama,
    setKecamatan,
    kecamatan,
    setSelectedKecamatanData,
    selecttedKecamatanData,
  } = useDataStore();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Function to handle provinsi button click
  const handleProvinsiClick = (provinsi) => {
    setSearchParam(provinsi.nama);
    setSelectedProvinsi(provinsi.nama);
    setSelectedKabKota(null);
    fetchData();
  };

  // Function to handle kab/kota button click
// Function to handle kab/kota button click
const handleKabKotaClick = (kabKota) => {
  setSelectedKabKota(kabKota); // Set the selected Kab/Kota

  // Filter the data for the selected kab/kota
  const kabKotaData = data.filter((item) => item.kab_kota.includes(kabKota));

  // Check if there is kecamatan data available
  const hasKecamatanData = kabKotaData.some((item) => item.kecamatan);

  if (hasKecamatanData) {
    // If kecamatan data is available, update the selectedNama state
    const updatedNama = kabKotaData
      .map((item) => {
        // Handle multiple kecamatan in one item
        return item.kecamatan.split('#')
          .filter(kecamatan => kecamatan) // Remove empty strings
          .map(kecamatan => `${item.nama}-${kecamatan}`); // Combine nama with each kecamatan
      })
      .flat() // Flatten the array of arrays
      .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

    setSelectedNama(updatedNama);
    
  } else {
    // If no kecamatan data, set search parameter and redirect
    setSearchParam(kabKota);
    setSelectedKabKota(null);
    setKecamatan(null);
    router.push('/searchcalegs'); // Redirect to /search page
  }
};


  const handleNamaKecamatanClick = (namaKecamatan) => {
    console.log(`Input namaKecamatan: ${namaKecamatan}`); // Log the input namaKecamatan

    // Split the input string by "-" and take the second part
    const splitParts = namaKecamatan.split("-");
    const kecamatanPart = splitParts.length > 1 ? splitParts[1] : null;
    console.log(`Extracted kecamatanPart: ${kecamatanPart}`); // Log the extracted kecamatan part

    // Check if kecamatanPart is defined before setting the search parameter
    if (kecamatanPart) {
      setSearchParam(kecamatanPart);
      console.log(`Set searchParam to: ${kecamatanPart}`); // Log the setting of searchParam
    } else {
      console.log("No kecamatan part found in namaKecamatan");
    }

    // Navigate to /search route
    router.push("/search");
    console.log("Navigated to /search route"); // Log the navigation action
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        await fetchData();
      } catch (error) {
        console.error("Error:", error);
      }
      setIsLoading(false);
    };

    fetchDataAsync();
    setSelectedKabKota(null);

    
  }, [fetchData]);
  
  return (
    <div className="mb-10 mt-10 font-sans mx-6">
      <Link href="/">
        <div className="flex justify-start items-center gap-2 mt-5 mb-5">
          <IoChevronBack size={30} style={{ color: "#D2355F" }} />

          {selectedProvinsi && (
            <>
              <h3 className="text-xl font-sans font-medium font-bold">
                {selectedProvinsi}
              </h3>
              <IoChevronBack size={30} style={{ color: "#D2355F" }} />
            </>
          )}

          {selectedKabKota && (
            <>
              <h3 className="text-xl font-sans font-medium font-bold">
                {selectedKabKota}
              </h3>
              <IoChevronBack size={30} style={{ color: "#D2355F" }} />
            </>
          )}

          {kecamatan && (
            <h3 className="text-xl font-sans font-medium font-bold">
              {kecamatan}
            </h3>
          )}
        </div>
      </Link>

      <div className="space-y-2 font-sans mb-4">
        <h1 className="text-xl text-center font-sans mb-5">
          Pilih Provinsi dimana kamu tinggal
        </h1>

        <div className=" mx-auto flex justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-20">
          <button
            className="bg-white border hover:bg-primary hover:text-white text-abu font-sans py-2 px-4 rounded-lg text-sm"
            // onClick={() => handleProvinsiClick(provinsi)}
          >
            {selectedProvinsi}
          </button>
        </div>
      </div>

      {isLoading ? (
        <button type="button" className=" bg-primary..." disabled>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          </svg>
          Processing...
        </button>
      ) : (
        data && (
          <div>
            <h1 className="text-xl text-center font-sans mb-5">
              Pilih Kabupaten/Kota
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
              {data
                .reduce((unique, item) => {
                  if (item.kab_kota) {
                    const kabKotaArray = item.kab_kota.split("#");
                    kabKotaArray.forEach((kabKota) => {
                      if (!unique.includes(kabKota)) {
                        unique.push(kabKota);
                      }
                    });
                  }
                  return unique;
                }, [])
                .map((kabKota, index) => (
                  <button
                    key={`${index}_${kabKota}`}
                    className="bg-white border hover:bg-primary hover:text-white text-abu font-sans py-2 px-4 rounded-lg text-sm"
                    onClick={() => handleKabKotaClick(kabKota)}
                  >
                    {kabKota}
                  </button>
                ))}
            </div>
          </div>
        )
      )}

      <h1 className="text-xl text-center font-sans mb-5">Nama Dapils</h1>
      <div className=" w-fit flex flex-col justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {selectedNama.map((namaKecamatan, index) => (
            <button
              key={index}
              className="bg-white border w-auto hover:bg-primary hover:text-white text-abu font-sans py-2 px-4 rounded-lg text-sm"
              onClick={() => handleNamaKecamatanClick(namaKecamatan)}
            >
              {namaKecamatan}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
