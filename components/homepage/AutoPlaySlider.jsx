"use client"

import React, { Component } from 'react';
import Slider from 'react-slick';
import ImageCarousel from './ImageCarousel'; // Ensure this component is properly defined in your project
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  state = {
    carouselData: [],
  };

  componentDidMount() {
    fetch('http://localhost:3001/get-caleg')
      .then(response => response.json())
      .then(data => this.setState({ carouselData: data }))
      .catch(error => console.error('Error:', error));
  }

  render() {
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
    };

    return (
      <div className="auto-play-carousel">
        <div className="header my-4">
          <h2 className="title text-center font-sans text-[36px]">Tentukan Kandidat Pilihanmu</h2>
          <p className="description text-center text-abu mx-2 font-sans text-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui.
          </p>
        </div>
        <Slider {...settings}>
          {this.state.carouselData.map((item) => (
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
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
