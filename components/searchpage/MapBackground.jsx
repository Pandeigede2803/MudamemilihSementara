"use client ";

import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FaLocationDot } from "react-icons/fa6";
import useDapilStore from "@/components/ZustandStore/useDapilStore";

const MapBackground = () => {
  return (
    <div>
      <div className="max-w-fit mx-auto relative">
      <Image
        src={
          "https://ik.imagekit.io/m1akscp5q/Group%201354.png?updatedAt=1702705424183"
        }
        width={1304}
        height={637}
        className="flex flex-col justify-center mx-auto"
        alt="image"
      />
      <div className="w-[20%] h-[10%] bottom-[24%] left-[24%] absolute">
        <div className="relative">
      <Link
            href={{
              pathname: "/searchPage/filter",
              query: {
                provinsi: "Jawa Timur",
              },
            }}
          >
            <div className="flex flex-col justify-center text-center mx-auto items-center absolute -right-[10%] mt-[4%] sm:right-[5%] sm:mt-[3%] md:right-[7%] md:mt-[8%]">
            <FaLocationDot className="text-secondary hover:text-xl hover:text-purple-500" />
            <h1 className="text-[8px] font-bold">JAWA TIMUR</h1>
            </div>
          </Link>
          <Link
            href={{
              pathname: "/searchPage/filter",
              query: {
                provinsi: "Jawa Barat",
              },
            }}
          > <div className="flex flex-col justify-center text-center mx-auto items-center absolute md:left-[13%] md:top-[10%]">
            <FaLocationDot className=" text-secondary hover:text-xl hover:text-purple-500 " />
            <h1 className="text-[8px] font-bold">JAWA BARAT</h1>
            </div>
            
          </Link>
        </div>
      </div>

      <div className="w-[3%] h-[3%] left-[41.2%] bottom-[28%] md:bottom-[25%] md:left-[42.3%] absolute " >
      <div className="relative flex justify-center">

          <Link
            href={{
              pathname: "/searchPage/filter",
              query: {
                provinsi: "Bali",
              },
            }}
          > <div className="flex flex-col justify-center text-center mx-auto items-center absolute">
            <FaLocationDot className=" text-secondary hover:text-xl hover:text-purple-500" />
            <h1 className="text-[8px] font-bold">BALI</h1>
            </div>
          </Link>
        </div>
      </div>


      </div>
    </div>
  );
};

export default MapBackground;
