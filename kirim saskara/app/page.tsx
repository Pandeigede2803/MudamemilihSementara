"use client"
import { Head } from 'next/document'
import Image from 'next/image'
import Header from "../components/homepage/Header";
import AutoPlaySlider from "../components/homepage/AutoPlaySlider"
import SiapaKita from "../components/homepage/SiapaKita";
import ArticleList from "../components/homepage/ArticleList";
import ContactUs from "../components/homepage/ContactUs";
import Testimonial from "../components/homepage/Testimonial";

import SlidersCards from "../components/homepage/SliderCards";
import TestimonialCardCarousel from '@/components/homepage/TestimonialCardcarousel';
import TestimonialCarousel from '@/components/homepage/TestimoniCarousel';


export default function Home() {
  return (
    <div className='mt-20'>
      <Header/>
      <AutoPlaySlider/>
      <SiapaKita/>
      <ArticleList/>
      <ContactUs/>
      
      <SlidersCards/>
      

      
  
      
    </div>
  )
}
