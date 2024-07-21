import MaxWidthWrapper from '@/components/max-width-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Timeline = () => {
  return (
    <main className='flex bg-black min-h-screen flex-col items-center justify-between p-24'>
      <MaxWidthWrapper>
        <div>
          <h1 className='text-2xl font-medium text-white'>
            {' '}
            I messaged you the very first time on{' '}
            <span className='bg-white text-black ml-2'>8th July, 2022.</span>
          </h1>
          <span className='text-xl text-white'>
            No, its not like I have forcefully searched on whatsapp, but I know
            the date, I dont know why 🤷‍♂️
          </span>
        </div>
        <span className='text-xl text-white'>
          I later took a screenshot, just to make sure{' '}
          {`---------------------------------->`}
        </span>
        <button className='bg-rose-400 ml-32 rounded p-1'>
          <Link href='/photo'>
            <span className='text-black'>Your First Photo</span>
          </Link>
        </button>
        <div className='p-12'>
          <Image alt='july' src={'/july.jpg'} width={800} height={800} />
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Timeline;
