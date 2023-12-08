import Image from "next/image";
import Link from "next/link";
import React from "react";


function Card(props) {

  const {image, link, urut, detail, name, style} = props

  return (
        <div className={`rounded overflow-hidden shadow-lg ${style}`}>
          <div className="relative">
            <Link href="/profile">
              <Image
                width={300}
                height={300}
                className="w-full"
                src={image}
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </Link>
            <Link href={link}>
              <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Photos
              </div>
            </Link>

            <Link href={link}>
              <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <small>No.</small>
                <span className="font-bold">{urut}</span>
              </div>
            </Link>
          </div>
          <div className="px-6 py-4">
            <Link
              href={link}
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {name}
            </Link>
            <p className="text-gray-500 text-sm">{detail}</p>
          </div>
          <div className="">
            <Link href={link}><p className="text-black p-5">Detail</p></Link>
          </div>

        </div>


  );
}

export default Card