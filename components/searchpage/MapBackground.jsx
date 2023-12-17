"use client ";

import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
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

      <div>
        <h1>Select a Province</h1>
        <Link href={{
          pathname:"/searchPage/filter",
          query: {
            provinsi:"Bali"
          }
        }

        }><h1>PILIHBALI</h1></Link>
        <button onClick={() => handleSelectProvinsi("Bali")}>Bali</button>
        <button onClick={() => handleSelectProvinsi("Jawa Barat")}>
          Jawa Barat
        </button>
        <button onClick={() => handleSelectProvinsi("Jawa Timur")}>
          Jawa Timur
        </button>
      </div>
    </div>
  );
};

export default MapBackground;
