"use client"

import React, { useEffect } from 'react';
import useAuthStore from "@/components/ZustandStore/authStore"// Adjust the path as necessary
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import { IoNotificationsCircle } from 'react-icons/io5';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const {initOnce,token} = useAuthStore();

  useEffect(() => {
    console.log('asdsssssss')
    initOnce(); // Perform login on component mount
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
