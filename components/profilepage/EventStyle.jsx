import Image from "next/image";
import React from "react";

function EventStyle(props) {
    const {image, title, description, alt, name, date} = props
  return (
    <>
      <div className="lg:w-[780px] lg:flex bg-slate-500 m-auto mt-10">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        >
            <Image 
            width={500}
            height={100}
            src={image}
            className="h-full"
            />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base">
            {description}
            </p>
          </div>
          <div className="flex items-center">
            <Image
                width={200}
                height={200}
                className="w-10 h-10 rounded-full mr-4"
                src={image}
                alt={alt}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{name}</p>
              <p className="text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventStyle;
