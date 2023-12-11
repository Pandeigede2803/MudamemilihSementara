import React from 'react'

const PartaiCarousel = ({ src,alt }) => {
  return (
    <div>
        
        <div className=' border  w-fit rounded-lg shadow-md mx-2 my-4 shadow-md'>
        <img src={src} alt={alt}/>
        </div>

      
    </div>
  )
}

export default PartaiCarousel
