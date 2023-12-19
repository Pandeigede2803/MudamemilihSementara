"use client"


import React from "react";
import Image from "next/image";
import SearchInput from "@/components/homepage/SearchInput";
import MapBackground from "@/components/searchpage/MapBackground";
import AnotherComponent from "@/components/searchpage/AnotherComponent";

const searchPage = () => {
  return (
    <div className="bg-primary h-full my-28">
        <MapBackground/>
    
        <div className="w-[70%] mx-auto">
        <SearchInput/>
        </div>
    </div>
  );
};

export default searchPage;;;
