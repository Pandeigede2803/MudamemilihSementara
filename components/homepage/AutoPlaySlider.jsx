"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import ImageCarousel from "./ImageCarousel"; // Import your ImageCarousel component
import carouselData from "./carouselData"; // Import your data array

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 768, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        // Add more breakpoints if needed
      ],

    };

    return (
      <div>
        <div className=" my-4">
        <h2 className=" flex text-center flex-col font-sans text-[36px] ">Tentukan Kandidat Pilihanmu</h2>
        <p className="text-center text-abu mx-2 font-sans text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui.</p></div>
        <Slider {...settings}>
          {carouselData.map((item) => (
            <div key={item.id}>
              {/* Pass the data as props to the ImageCarousel component */}
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
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
