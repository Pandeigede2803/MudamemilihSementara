"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchInput from "@/components/homepage/SearchInput";
import MapBackground from "@/components/searchpage/MapBackground";
import FetchComponent from "@/components/searchpage/FetchComponent";
import SearchComponent from "@/components/searchpage/SearchComponent";
import { useRouter } from "next/navigation";
import InteractiveMap from "@/components/searchpage/InteractiveMap";

const SearchPage = () => {
  const router = useRouter();
  const [provinsi, setProvinsi] = useState("");

  useEffect(() => {
    // Check if the router is ready and the query parameter is available
    if (router.isReady) {
      const queryProvinsi = router.query.provinsi;
      if (queryProvinsi) {
        setProvinsi(queryProvinsi);
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      <div className="bg-primary h-full mt-28">
        <MapBackground />
      </div>
       
      <div className="mx-[10px] my-3">
        {/* You can pass provinsi as a prop to SearchComponent if needed */}
        <SearchComponent provinsi={provinsi} />
      </div>
      <div>
        {/* Similarly, pass provinsi as a prop to FetchComponent if it's required */}
        <FetchComponent provinsi={provinsi} />
      </div>
    </div>
  );
};

export default SearchPage;
