"use client";

import React from "react";
import CountdownComponent from "./CountdownComponent";
import Image from "next/image";

const HeaderImage = () => {
  return (
    <div>
      <div className="relative flex justify-center ">
        <Image
          src="https://ik.imagekit.io/m1akscp5q/Group%201328.png?updatedAt=1702042098665"
          alt="mockup"
          width={578} // specify the width
          height={550} // specify the height
          layout="responsive" // optional: adjust layout as needed
        />
        <CountdownComponent style="hidden lg:flex absolute bottom-0 bg-white rounded-xl lg:right-18 shadow-lg" />
      </div>
    </div>
  );
};

export default HeaderImage;
