'use client';
import { useEffect } from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { runFireworks } from '@/components/fireworks';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex bg-rose-600 min-h-screen flex-col items-center justify-between p-24'>
      <MaxWidthWrapper>
        <motion.div className='p-2 md:p-24'>
          <h1 className='text-3xl md:text-5xl font-medium text-white'>
            Welcome to the echoes of my heart
          </h1>
          <p className='text-3xl md:text-6xl font-semibold text-white mt-4'>
            Mansi Mukesh Choudhary🤍
          </p>
          <div className='mt-8 bg-rose-300 text-black text-xl p-4 flex flex-row justify-between'>
            <p className=''>
              Theres a lot to come, so brace yourself,{' '}
              <span className='text-4xl'>beautiful</span>
            </p>
            <button className='bg-rose-400 p-2 border border-black'>
              <Link href='/timeline'>
                <p className='text-black'>Click here</p>
              </Link>
            </button>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </main>
  );
}
