'use client';

import { useState } from 'react';
import { useCartContext } from '../context/cart_context';
const Products = [
  {
    id: 1,
    listing: 'Footer Controller',
    title: 'None',
    title2: 'Profile Remote Foot Controller',
    price: 449,
  },
];

// TODO: For presentation only, meets figma guidelines, refactor logic in the future, useReducer?
// TODO: handle debounce

function ContainerBottom() {
  const title = Products[0].title;
  const title2 = Products[0].title2;
  const listing = Products[0].listing;

  const [selectedProduct, setSelectedProduct] = useState<string | null>(title);
  let { cartPrice, setCartPrice } = useCartContext();

  const handleClick = (title: number | any) => {
    if (title === 'None') {
      setCartPrice(2298);
    } else if (title2 === 'Profile Remote Foot Controller') {
      setCartPrice(2747);
    }

    if (selectedProduct === title) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(title);
    }
  };

  return (
    <div className='container w-full px-1   h-[200px] '>
      <h3 className='text-gray-900 font-bold'>{listing}</h3>
      <div
        className={`w-full h-[60px] my-2 border-2 rounded-lg grid items-center ${
          selectedProduct === title ? 'border-gray-900' : 'border-gray-200'
        }`}
        onClick={() => handleClick(title)}
      >
        <div className='w-[90%] mx-auto flex justify-between gap-2 text-sm'>
          <h4 className='text-gray-900 font-bold '>{title}</h4>
        </div>
      </div>

      <div
        className={`w-full h-[60px] my-2 border-2 border-gray-200 rounded-lg grid items-center ${
          selectedProduct === 'Profile Remote Foot Controller'
            ? 'border-gray-900'
            : 'border-gray-200'
        }`}
        onClick={() => handleClick(title2)}
      >
        <div className='w-[90%] mx-auto flex justify-between gap-2 text-sm items-center'>
          <h4 className='text-gray-900 font-bold'>{title2}</h4>
          <span className='font-bold  ml-1 text-gray-900 flex justify-end w-[100px]'>
            + $449
          </span>
        </div>
      </div>
    </div>
  );
}
export default ContainerBottom;
