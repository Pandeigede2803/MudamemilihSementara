import React from 'react';
import Image from 'next/image';
import bgJabar from '@/public/bg-jabar-pangalengan.jpg';
import prabowo from '../../public/prabowo-nobg.png';

function Hero() {
  return (
    <>
      <div style={{ position: 'relative', height: '500px'}} className='mb-20'>
        {/* Background image */}
        <Image
          src={bgJabar}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />

        {/* Content overlay */}
        <div
        className='absolute top-0 left-0 right-0 bottom-0 lg:flex justify-between item- text-white'

          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
          }}
        >
            <div className='lg:w-[50%] m-auto'>
            <div className='text-center'>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    Your Hero Title
                </h1>
                <p style={{ fontSize: '1rem' }}>
                    Your hero tagline or description goes here.
                </p>
            </div>
            </div>
          {/* Add other content or buttons as needed */}
        <div className='right-0 bottom-0'>
            <Image
            src={prabowo}
            alt='Prabowo'
            width={530}
            height={600}
            />
        </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
