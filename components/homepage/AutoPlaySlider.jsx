"use client"

// AutoPlay.js
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import ImageCarousel from './ImageCarousel';
import useCarouselStore from "@/components/ZustandStore/useCarouselStore";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AutoPlay = () => {
  const { carouselData, fetchCarouselData } = useCarouselStore();

  useEffect(() => {
    fetchCarouselData();
  }, [fetchCarouselData]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints if needed
    ],
    // ...settings as before
  };

  return (
    <div className="auto-play-carousel">

<div className="header my-4">
          <h2 className="title text-center font-sans text-[36px]">Tentukan Kandidat Pilihanmu</h2>
          <p className="description text-center text-abu mx-2 font-sans text-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui.
          </p>
        </div>
      {/* Component structure as before */}
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id}>
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
            
              // ...passing props to ImageCarousel
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
