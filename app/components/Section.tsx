'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import Products from '@/app/components/Products';

const imgFront = '/kemper-front.jpg';
const imgRear = '/kemper-rear.jpg';
const imgAngle = '/kemper-angle.jpg';

function Section() {
  const [mainImageSrc, setMainImageSrc] = useState(imgFront);

  const handleImageChange = (productId: number | string) => {
    productId = productId.toString();

    productId === '1'
      ? setMainImageSrc(imgFront)
      : productId === '2'
      ? setMainImageSrc(imgAngle)
      : setMainImageSrc(imgRear);
  };

  return (
    <section className='lg:w-[452px] '>
      <div className=' lg:sticky lg:top-0 lg:z-10'>
        <div className='border-2 border-gray-200 rounded-lg overflow-hidden mb-5'>
          <Image
            src={mainImageSrc}
            alt='Kemper'
            width={289}
            height={189}
            sizes='320 640 768 1024 1280'
            layout='responsive'
            priority
            id='mainImage'
          />
        </div>
        <div>
          <Products handleImageChange={handleImageChange} />
        </div>
      </div>
    </section>
  );
}
export default Section;
