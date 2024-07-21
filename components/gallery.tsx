// src/components/MasonryGallery.js

import Image from 'next/image';
import React from 'react';

const images = [
  { src: '/photo.jpg', width: 300, height: 400, alt: 'Photo 1' },
  { src: '/snapphoto.jpg', width: 400, height: 300, alt: 'Photo 2' },
  { src: '/dancephoto.jpg', width: 300, height: 500, alt: 'Photo 3' },
  { src: '/cutephoto.jpg', width: 500, height: 300, alt: 'Photo 4' },
  { src: '/muslimphoto.jpg', width: 400, height: 400, alt: 'Photo 5' },
  { src: '/photo.jpg', width: 300, height: 400, alt: 'Photo 1' },
  { src: '/snapphoto.jpg', width: 400, height: 300, alt: 'Photo 2' },
  { src: '/dancephoto.jpg', width: 300, height: 500, alt: 'Photo 3' },
  { src: '/cutephoto.jpg', width: 500, height: 300, alt: 'Photo 4' },
  { src: '/muslimphoto.jpg', width: 400, height: 400, alt: 'Photo 5' },
  //   { src: '/photo6.jpg', width: 300, height: 300, alt: 'Photo 6' },
];

const MasonryGallery = () => {
  return (
    <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
        {images.map((image, index) => (
          <div key={index} className='mb-4'>
            <Image
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
              className='w-full h-auto rounded-lg'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
