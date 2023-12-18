"use client"

import React, { useState } from "react";
import Card from "../../components/searchpage/Card";
import Filter from "../../components/searchpage/filter";
import CardData from "../../components/searchpage/CardData";

function Page() {
  const [filteredData, setFilteredData] = useState(CardData);

  const handleFilterChange = (filterValues) => {
    // Implement your filtering logic based on the provided filterValues
    // For simplicity, this example assumes a case-insensitive substring match
    const newFilteredData = CardData.filter((data) =>
      Object.entries(filterValues).every(
        ([key, value]) =>
          !value || String(data[key]).toLowerCase().includes(value.toLowerCase())
      )
    );

    setFilteredData(newFilteredData);
  };

  return (
    <div className="">
      <Filter onFilterChange={handleFilterChange} />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
          {filteredData.map((data) => (
            <Card
              key={data.urut}
              image={data.image}
              link={data.link}
              urut={data.urut}
              name={data.name}
              detail={data.detail}
              style={data.style}
              partai={data.partai}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
