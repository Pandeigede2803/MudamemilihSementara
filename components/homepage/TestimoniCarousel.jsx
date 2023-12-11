"use client";

import React, { Component } from "react";
import Slider from "react-slick";

import TestimonialData from "./TestimonialData"
import TestimonialCardCarousel from "./TestimonialCardcarousel";

export default class TestimonialCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
        <div className="lg:hidden">
        <Slider {...settings}>
          {TestimonialData.map((item) => (
            <div key={item.id}>
              <TestimonialCardCarousel data={item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
