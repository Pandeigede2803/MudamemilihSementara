import SearchInput from "@/components/homepage/SearchInput";
import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import FilterButton from "@/components/searchpage/FilterButton";
import FilterComponent from "@/components/searchpage/FilterComponent"

const filter = ({searchParams}) => {

  console.log(`PASS DATA IS ${searchParams.provinsi}`);

  const provinsiName = searchParams.provinsi
  return (
    <div className="px-8 h-[100vh]">
      
      <FilterComponent provinsiname={searchParams.provinsi}/>
    </div>
  );
};

export default filter;
