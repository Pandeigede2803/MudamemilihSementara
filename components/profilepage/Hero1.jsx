import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { PiOfficeChairLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import profileFoto1 from "../../public/profileFoto1.png";
import heroBg2 from "../../public/heroBg2.png";
import PartaiNasdem from "@/public/PartaiNasDem.png";

function Hero() {
  return (
    <div className="mt-[100px] lg:mx-5">
      <div className="mb-20 relative w-full flex items-end">
        {/* Background image */}
        <Image
          src={heroBg2}
          alt="Background Image"
          width={300}
          height={300}
          className="w-full h-[183px] lg:h-[331px] -z-10"
        />

        {/* Add other content or buttons as needed */}
        <div className="absolute ml-5 lg:ml-[100px] -bottom-10 lg:-bottom-24 z-10 flex justify-between ">

          <Image
            src={profileFoto1}
            alt="profile"
            width={84}
            height={140}
            className="lg:w-[200px] rounded-lg"
          />
        </div>



        <div className="bg-white shadow-lg absolute w-[60%] ml-[300px] -bottom-[60px] py-5 hidden lg:block rounded-r-lg">
            <div className="">
              <div className="px-5 py-3">
                <div className="flex mt-4 sm:mt-0 item-center justify-between">
                  <div>
                    <h1 className="font-semibold text-[24px] mr-3 text-center lg:mr-0">
                      MURAD NASSER
                    </h1>
                    <p className="text-[10px]">
                      "Semangat Muda Menuju Kemajuan"
                    </p>
                  </div>
                  <div className=" flex lg:flex-row justify-center">
                    <Link href={"https://instagram.com/yukmilih"}>
                      <div className="bg-primary rounded-full p-1 m-1">
                        <MdEmail size={20} className="text-white" />
                      </div>
                    </Link>
                    <Link
                      href={
                        "https://www.facebook.com/profile.php?id=61553963472122&mibextid=ZbWKwL"
                      }
                    >
                      <div className=" bg-primary rounded-full p-1 m-1">
                        <IoLogoFacebook size={20} className="text-white" />
                      </div>
                    </Link>
                    <Link href={"https://instagram.com/yukmilih"}>
                      <div className="bg-primary rounded-full p-1 m-1">
                        <FaInstagram size={20} className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="bg-white flex justify-between items-center">
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={PartaiNasdem}
                        className="bg-red-400 rounded-full w-10 h-10"
                      />
                      <div>
                        <h3 className="text-[16px]">Partai Nasdem</h3>
                        <h4 className="text-[14px] text-[#848484]">
                          Partai Politik
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <SlCalender />
                    <div>
                      <h3 className="text-center">No. 1</h3>
                      <h4 className="text-[14px] text-center text-[#848484]">
                        No. Urut
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <PiOfficeChairLight />
                    <div>
                      <h3>DPR Jawa Barat 1</h3>
                      <p className="text-[14px] text-[#848484]">
                        Daerah Pilihan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




      </div>
    </div>
  );
}

export default Hero;
