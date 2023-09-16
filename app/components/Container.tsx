'use client';

import { useState, useEffect } from 'react';
import { useCartContext } from '../context/cart_context';

function Container({
  listing,
  title,
  description,
  description2,
  price,
  title2,
}: {
  listing: string;
  title: string;
  description: string;
  description2: string;
  price: any;
  title2: string;
}) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(title);
  let { cartPrice, setCartPrice } = useCartContext();

  // TODO: For presentation only, happy path, meets figma guidelines, refactor logic in the future, useReducer?
  // TODO: handle debounce

  const handleClick = (title: string) => {
    if (title === 'Powered') {
      setCartPrice(2298);
    } else if (title === 'None') {
      setCartPrice(1799);
    }

    if (selectedProduct === title) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(title);
    }
  };

  useEffect(() => {}, [cartPrice]);

  return (
    <div className='container w-full px-1  h-[268px] mb-10'>
      <h3 className='text-gray-900 font-bold'>{listing}</h3>
      <div
        className={`w-full h-[108px] my-2 border-2 rounded-lg grid items-center ${
          selectedProduct === title ? 'border-gray-900' : 'border-gray-200'
        }`}
        onClick={() => handleClick(title)}
      >
        <div className='w-[90%] mx-auto flex flex-col gap-2 text-sm'>
          <h4 className='text-gray-900 font-bold '>{title}</h4>
          <p className='text-gray-500'>{description}</p>
        </div>
      </div>
      <div
        className={`w-full h-[108px] my-2 border-2 rounded-lg grid items-center ${
          selectedProduct === title2 ? 'border-gray-900' : 'border-gray-200'
        }`}
        onClick={() => handleClick(title2)}
      >
        <div className='w-[90%] mx-auto flex flex-col gap-2 text-sm'>
          <h4 className='text-gray-900 font-bold '>{title2}</h4>
          <p className='text-gray-500 flex justify-between'>
            {description2}
            <span className='font-bold ml-1 text-gray-900 flex justify-end w-[100px]'>
              {price ? `+ $${price}` : null}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Container;
