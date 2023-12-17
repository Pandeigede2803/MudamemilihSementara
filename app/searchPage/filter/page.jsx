import SearchInput from "@/components/homepage/SearchInput";
import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import FilterButton from "@/components/searchpage/FilterButton";
import FilterComponent from "@/components/searchpage/FilterComponent"

const filter = () => {
  return (
    <div>
      <FilterComponent/>
    </div>
  );
};

export default filter;
