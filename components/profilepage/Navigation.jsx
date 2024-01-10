"use client";
import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <ul className="flex justify-between items-center py-2 border-b-2 mb-5 mt-5 lg:w-full lg:mx-auto lg:mt-[150px] lg:justify-start lg:gap-5 lg:px-">
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "/profile"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("/profile")}
        >
          <Link href={"/profile"}>
            <p>Visi Misi</p>
          </Link>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "/profile/siapasaya"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("/profile/siapasaya")}
        >
          <Link href={"/profile/siapasaya"}>
            <p>Siapa Saya?</p>
          </Link>
        </li>
        <li
          className={`text-[#7B7B7B] font-bold text-[12px] sm:text-[16px] hover:text-primary ${
            activeItem === "/profile/event"
              ? "text-primary border-b-2 border-b-primary transition duration-500"
              : ""
          }`}
          onClick={() => handleItemClick("/profile/event")}
        >
          <Link href={"/profile/event"}>
            <p>Event List</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
