"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 dark:border-gray-600 font-sans">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://ik.imagekit.io/m1akscp5q/logo-magenta%201.png?updatedAt=1702042098615"
            className="lg:h-auto lg:w-[184px] h-auto w-[100px]"
            alt="MudahMemilih Logo"
            width={184}
            height={73}
          />
          
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href={"https://wa.me/6282339929257?text=Saya%20tertarik%20dengan%20Mudah%20Memiulih"} target="_blank">
          <button
            type="button"
            className="text-white bg-primary hover:bg-white hover:text-primary focus:ring-4 focus:outline focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center hover:border-2"
          >
            Contact Us
          </button>
          </Link>
          <button
            datacollapsetoggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-c rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-primary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:text-primary  bg-white text-primary  rounded md:bg-transparent  -700 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Testing"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Add your menu items here */}
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
