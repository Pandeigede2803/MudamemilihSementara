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
      <Image
        src={
          "https://ik.imagekit.io/m1akscp5q/Group%201354.png?updatedAt=1702705424183"
        }
        width={1304}
        height={637}
        className=" flex flex-col justify-center mx-auto "
        alt="image"
      />

      <div className=" flex flex-row space-x-5 ">
        <div className="">
          <Link
            href={{
              pathname: "/searchPage/filter",
              query: {
                provinsi: "Bali",
              },
            }}
          > <div className="flex flex-col justify-center text-center mx-auto bg-slate-400 items-center">
            <FaLocationDot className=" text-secondary hover:text-xl hover:text-white" />
            <h1 className=" text-[8px]">BALI</h1>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={{
              pathname: "/searchPage/filter",
              query: {
                provinsi: "Jawa Timur",
              },
            }}
          >
            <div className="flex flex-col justify-center text-center mx-auto bg-slate-400 items-center">
            <FaLocationDot className="text-secondary hover:text-xl hover:text-white " />
            <h1 className="text-[8px]">JAWA TIMUR</h1>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={{
              pathname: "/searchPage/filter",
              query: {
                provinsi: "Jawa Barat",
              },
            }}
          > <div className="flex flex-col justify-center text-center mx-auto bg-slate-400 items-center">
            <FaLocationDot className=" text-secondary " />
            <h1 className="text-[8px]">JAWA BARAT</h1>
            </div>
            
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default MapBackground;
