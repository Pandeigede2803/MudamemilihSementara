import React, { useState } from "react";

const ImageCarousel = ({ src, name, dapil, partai, logoPartai }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="m-auto max-w-sm overflow-hidden rounded-3xl mx-4 bg-slate-400 relative group">
      <h4 className="absolute top-0 right-0 bg-primary text-xs text-white px-3 py-1 rounded-bl-lg">
        {dapil}
      </h4>
      <img className="w-full object-cover" src={src} alt="Person's Image" />
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-2 ">
        <h4 className="  font-thin font-sans text-xs text-base text-white mb-2">
          {name}
        </h4>
        <span className="flex flex-row text-center align-middle">
          <img src={logoPartai} alt="Party Logo" />
          <h5 className="text-white text-[10px] font-sans text-center  mx-2 ">
            {partai}
          </h5>
        </span>
      </div>
      <div className="flex-col absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>Kepoin gue yuk</div>
      </div>
    </div>
  );
};

export default ImageCarousel;
