import React from "react";
import Image from "next/image";
import SearchInput from "@/components/homepage/SearchInput";
import MapBackground from "@/components/searchpage/MapBackground"

const searchPage = () => {
  return (
    <div>
      <div className="bg-primary my-28">
        <MapBackground/>
        <div className="flex flex-col mx-96 bg-slate-400">
        {/* <SearchInput/> */}
        </div>
      </div>
    </div>
  );
};

export default searchPage;;;
