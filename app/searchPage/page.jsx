import React from "react";
import Image from "next/image";
import SearchInput from "@/components/homepage/SearchInput";

const searchPage = () => {
  return (
    <div>
      <div className="bg-primary my-28">
        <Image
          src="https://ik.imagekit.io/m1akscp5q/Red%20White%20Indonesia%20Independence%20Day%20Instagram%20Post%20(1440%20x%201080%20px)%201.png?updatedAt=1702567080473"
          width={1304}
          height={637}
          className=" flex flex-col justify-center mx-auto "
        />
        <div className="flex flex-col mx-96 bg-slate-400">
        <SearchInput/>
        </div>
      </div>
    </div>
  );
};

export default searchPage;;;;;
