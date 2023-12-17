import SearchInput from '@/components/homepage/SearchInput';
import React from 'react';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


const filter = () => {
  return (
    <div className='my-32'>
      <Link href={"/searchPage"}> <FaArrowLeft /> BACK</Link>
      <SearchInput/>
      <div className='my-4'>

        {/* kabupaten */}
        <div>
          <h1 className=' text-center'>PILIH KABUPATENMU</h1>
          <div className=' flex flex-row justify-center space-x-2'>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab. Badung</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400 '>Kab. Jembrana</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kota Madya Denpasar</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab. Buleleng </button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400 '>Kab. Kelungkung</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab.Gianyar</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab. Bangli</button>

          </div>


        </div>
        <h1 className=' text-center'>PILIH KELURAHANMU</h1>
          <div className=' flex flex-row justify-center space-x-2'>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab. Badung</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400 '>Kab. Jembrana</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kota Madya Denpasar</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab. Buleleng </button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400 '>Kab. Kelungkung</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab.Gianyar</button>
          <button className=' bg-white border border rounded-lg px-4 py-2  border-black hover:bg-slate-400'>Kab. Bangli</button>

          </div>

        {/* kelurahan */}
        <div></div>


      </div>
      
    </div>
  )
}

export default filter;
