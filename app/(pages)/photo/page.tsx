import MasonryGallery from '@/components/gallery';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import RoseComponent from '@/components/rotating-rose';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Photo = () => {
  return (
    <main className='flex bg-rose-300 min-h-screen flex-col items-center justify-between p-24'>
      <MaxWidthWrapper>
        <div className='p-2 md:p-12'>
          <h1 className='text-xl'>
            <span className='text-4xl'>25th July, 2022 {''}</span> was the day
            when I clicked your first photo on my phone
          </h1>
          <div className='mt-6 flex flex-row justify-evenly gap-x-6'>
            <MasonryGallery />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Photo;
