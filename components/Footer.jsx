"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-sans bg-primary text-white bg-black w-full ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex-row md:justify-between flex flex-col items-center">
          <div className="mb-6 md:mb-0 lg:w-[30%] flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center">
              <Image
                width={200}
                height={100}
                src="/logo-turquois.png"
                alt="MudahMemilih Logo"
              />
            </Link>
            <p className="text-center lg:text-left">
              Platform yang gampangin kamu buat dapet caleg yang cocok!
            </p>
          </div>

          <div className="mt-3   flex flex-col text-left ml-0 font-sans ">
            <h2 className="text-center  text-sm font-semibold text-secondary uppercase lg:ml-3">
              Fitur
            </h2>
            <ul className="font-medium p-3 flex flex-col  gap-3">
              <li className="">
                <Link href="#" className="hover:underline">
                  Daftar Calon
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Partai
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Seputar Pemilu
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-5 justify-center">
            <span className="text-sm text-white sm:text-center ">
              2023 © Copyright. All Rights Reserved.
            </span>

            <div className="flex mt-4 justify-center sm:mt-0">
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=61553963472122&mibextid=ZbWKwL"
                }
              >
                <div className=" bg-secondary rounded-full p-1 m-1">
                  <IoLogoFacebook size={20} className="text-white" />
                </div>
              </Link>
              <Link href={"https://instagram.com/yukmilih"}>
                <div className="bg-secondary rounded-full p-1 m-1">
                  <FaInstagram size={20} className="text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
