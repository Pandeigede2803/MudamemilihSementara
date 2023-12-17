import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const MapBackground = () => {
  return (
    <div className=" bg-slate-600">
      <div className="relative w-full bg-primary">
        <Image
          src={
            "https://ik.imagekit.io/m1akscp5q/Group%201354.png?updatedAt=1702705424183"
          }
          width={1304}
          height={637}
          className=" flex flex-col justify-center mx-auto "
          alt="image"
        />

        <div className=" bg-slate-500 w-[200px] h-[60px] absolute bottom-[170px] left-[650px] flex">
          {/* create the button to direct link to searchPage/filter */}

          
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-7 h-7 border-primary border bg-white text-primary text-lg font-extrabold rounded-full p-1 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-7 h-7 border-primary border bg-white text-primary text-lg font-extrabold rounded-full p-1 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-7 h-7 border-primary border bg-white text-primary text-lg font-extrabold rounded-full p-1 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-7 h-7 border-primary border bg-white text-primary text-lg font-extrabold rounded-full p-1 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-7 h-7 border-primary border bg-white text-primary text-lg font-extrabold rounded-full p-1 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-7 h-7 border-primary border bg-white text-primary text-lg font-extrabold rounded-full p-1 " />
          </Link>

    
         
        </div>

        <div className="w-[40px] h-[20px] absolute bottom-[150px] left-[490px] flex">
          <HiOutlineLocationMarker />
          <HiOutlineLocationMarker />
          <HiOutlineLocationMarker />
          <HiOutlineLocationMarker />
        </div>
        <div className="bg-red-800 absolute"></div>
        <div className="bg-green-500 absolute"></div>

        <div className=" flex flex-row">
          <HiOutlineLocationMarker />
          <HiOutlineLocationMarker />
          <HiOutlineLocationMarker />
          <HiOutlineLocationMarker />
        </div>
      </div>
    </div>
  );
};

export default MapBackground;
