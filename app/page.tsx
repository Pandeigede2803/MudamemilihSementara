"use client"

import React, { useEffect } from 'react';
import useAuthStore from "@/components/ZustandStore/authStore" // Adjust path as necessary

// Import your homepage components
import Header from "../components/homepage/Header";
import AutoPlaySlider from "../components/homepage/AutoPlaySlider";
import SiapaKita from "../components/homepage/SiapaKita";
import ArticleList from "../components/homepage/ArticleList";
import ContactUs from "../components/homepage/ContactUs";
import SlidersCards from "../components/homepage/SliderCards";
import { motion } from "framer-motion";

export default function Home() {
    // const login = useAuthStore(state => state.login);

    // useEffect(() => {
    //     login(); // Perform login on component mount
    // }, [login]);

    return (
        <div className='mt-20 p-4'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Header/>
            </motion.div>
            <AutoPlaySlider/>
            <SiapaKita/>
            <ArticleList/>
            <ContactUs/>
            <SlidersCards/>
        </div>
    );
}
