'use client';

import { useState } from 'react';

const products = [
  {
    id: 1,
    imageSrc: '/kemper-front.jpg',
    imageAlt: 'front',
  },
  {
    id: 2,
    imageSrc: '/kemper-angle.jpg',
    imageAlt: 'angle',
  },
  {
    id: 3,
    imageSrc: '/kemper-rear.jpg',
    imageAlt: 'rear',
  },
  // More products...
];

export default function Products({
  handleImageChange,
}: {
  handleImageChange: (productId: number) => void;
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClick = (productId: number | any) => {
    setSelectedProduct(productId);
    handleImageChange(productId);
  };

  return (
    <div className='bg-white justify-center'>
      <div className='w-full'>
        <div className='flex space-x-2.5 sm:gap-2 md:gap-3 '>
          {products.map((product) => (
            <div
              key={product.id}
              className={`group w-full h-[76px] flex border-2 border-solid
               rounded-lg overflow-hidden  items-center 
               justify-center sm:w-[470px] sm:h-[105px] 
               md:w-full md:h-[142px] lg:w-[170px] lg:h-[92px]
                xl:w-[170px] xl:h-[92px] ${
                  selectedProduct === product.id
                    ? 'border-gray-900'
                    : 'border-gray-200'
                } `}
            >
              <div
                className=' rounded-md  group-hover:opacity-75 '
                onClick={() => handleClick(product.id)}
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='w-max h-auto object-cover]'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
