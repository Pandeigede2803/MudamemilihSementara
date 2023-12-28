import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import useDapilStore from "@/components/ZustandStore/useDapilStore";
import useDapilStoreBaru from "@/components/ZustandStore/useDapilStoreBaru"

const MapBackground = () => {
  const { setSelectedProvinsi } = useDapilStoreBaru();

  // Handler for when a region is clicked
  const handleRegionClick = (regionName) => {
    setSelectedProvinsi(regionName);
    // Optionally, prevent default if needed
    // e.preventDefault();
  };

  return (
    <div>
      <div className="max-w-fit mx-auto relative">
        <Image
          src="https://ik.imagekit.io/m1akscp5q/Group%201354.png?updatedAt=1702705424183"
          width={1304}
          height={637}
          className="flex flex-col justify-center mx-auto"
          alt="map image"
        />

        {/* Update each region with an onClick handler */}
        <div className="w-[20%] h-[10%] bottom-[24%] left-[24%] absolute">
          <div className="relative">
            <div
              className="flex flex-col justify-center text-center mx-auto items-center absolute -right-[10%] mt-[4%] sm:right-[5%] sm:mt-[3%] md:right-[7%] md:mt-[8%]"
              onClick={() => handleRegionClick("Jawa Timur")}
            >
              <FaLocationDot className="text-secondary hover:text-xl hover:text-purple-500  " />
              <h1 className="text-[8px] font-bold">JAWA TIMUR</h1>
            </div>
          </div>
        </div>

        {/* Repeat for other regions */}
        {/* Example for JAWA BARAT */}
        <div className="w-[20%] h-[10%] bottom-[24%] left-[24%] absolute">
          <div className="relative">
            <div
              className="flex flex-col justify-center text-center mx-auto items-center absolute md:left-[13%] md:top-[10%]"
              onClick={() => handleRegionClick("Jawa Barat")}
            >
              <FaLocationDot className="text-secondary hover:text-xl hover:text-purple-500 " />
              <h1 className="text-[8px] font-bold">JAWA BARAT</h1>
            </div>
          </div>
        </div>

        {/* Add similar blocks for other regions like BALI, etc. */}

        <div className="w-[3%] h-[3%] left-[41.2%] bottom-[28%] md:bottom-[25%] md:left-[42.3%] absolute ">
          <div className="relative flex justify-center">
            <div
              onClick={() => handleRegionClick("Bali")}
              className="flex flex-col justify-center text-center mx-auto items-center absolute"
            >
              <FaLocationDot className=" text-secondary hover:text-xl hover:text-purple-500" />
              <h1 className="text-[8px] font-bold">BALI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBackground;
