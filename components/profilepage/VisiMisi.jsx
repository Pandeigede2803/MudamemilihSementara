"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function VisiMisi() {
  const [showVisi, setShowVisi] = useState(false);
  const [showMisi, setShowMisi] = useState(false);

  const toggleVisi = () => {
    setShowVisi(!showVisi);
  };

  const toggleMisi = () => {
    setShowMisi(!showMisi);
  };

  return (
    <div className='flex flex-col gap-5 lg:mx-5'>
      <div>
        <div className='w-full py-2 shadow-md flex justify-between'>
          <h3 className='text-[18px] font-bold'>Visi</h3>
          <button onClick={toggleVisi}><IoIosArrowDown size={20} /></button>
        </div>
        {showVisi && <p className='mt-[24px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iste soluta eum reprehenderit qui! Ipsa quod fugit quia laborum ab et sint reiciendis velit veniam itaque blanditiis natus asperiores aperiam veritatis</p>}
      </div>

      <div>
        <div className='w-full py-2 shadow-md flex justify-between'>
          <h3 className='text-[18px] font-bold'>Misi</h3>
          <button onClick={toggleMisi}><IoIosArrowDown size={20} /></button>
        </div>
        {showMisi && <p className='mt-[24px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iste soluta eum reprehenderit qui! Ipsa quod fugit quia laborum ab et sint reiciendis velit veniam itaque blanditiis natus asperiores aperiam veritatis</p>}
      </div>
    </div>
  );
}

export default VisiMisi;
