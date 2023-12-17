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

        <div className=" w-[200px] h-[60px] absolute bottom-[20px] left-[110px] flex ">
          
          
          {/* create the button to direct link to searchPage/filter */}
          <Link href={"searchPage/filter"}>
            <button>
              Jawa timur
            <HiOutlineLocationMarker className="w-auto  text-secondary text-sm font-extrabold  p-0 " />
            </button>
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-auto   text-secondary  text-sm font-extrabold rounded-full p-0 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-auto   text-secondary text-sm font-extrabold rounded-full p-0 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-auto   text-secondary text-sm font-extrabold rounded-full p-0 " />
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-auto   text-secondary text-sm font-extrabold rounded-full p-0 " />
            Jawa timur
          </Link>
          <Link href={"searchPage/filter"}>
            <HiOutlineLocationMarker className="w-auto  text-secondary text-sm font-extrabold  p-0 " />
            Bali
          </Link>

    
         
        </div>
      </div>
    </div>
  );
};

export default MapBackground;;;;
