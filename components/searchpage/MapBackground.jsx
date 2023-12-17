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
        <Link
          href={{
            pathname: "/searchPage/filter",
            query: {
              provinsi: "Bali",
            },
          }}
        >
          <h1>PILIH BALI</h1>
        </Link>

        <Link
          href={{
            pathname: "/searchPage/filter",
            query: {
              provinsi: "Jawa Timur",
            },
          }}
        >
          <h1>PILIH JAWA TIMUR</h1>
        </Link>

        <Link
          href={{
            pathname: "/searchPage/filter",
            query: {
              provinsi: "Jawa Barat",
            },
          }}
        >
          <h1>PILIh JAWA BARAT</h1>
        </Link>
      </div>
    </div>
  );
};

export default MapBackground;
