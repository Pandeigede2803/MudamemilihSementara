import React from 'react'
import Data from '../../components/homepage/CarouselData'
import ImageCarousel from "../../components/homepage/ImageCarousel";

function Dprd() {
  return (
    <div>
        <button className='p-5 font-bold text-[25px]'>DPRD</button>
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
          {Data.map((item) => (
              <ImageCarousel
              src={item.src}
              alt={item.alt}
              href={item.href}
              title={item.title}
              dapil={item.dapil}
              name={item.name}
              logoPartai={item.logoPartai}
              partai={item.partai}
              content={item.content}
              
            />
          ))}
        </div>
    </div>
  )
}

export default Dprd