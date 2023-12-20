import React from 'react'
import Image from "next/image";

const PartaiCarousel = ({ src,alt }) => {
  return (
    <div className=' '>
        <div className=' border  w-fit rounded-2xl shadow-lg mx-2 my-4'>
        <Image width={225} height={225} src={src} alt={alt} className='rounded-2xl'/>
        </div>
    </div>
  )
}

export default PartaiCarousel
