'use client'

import { useCartContext } from '../context/cart_context';

import { HiGlobe } from 'react-icons/hi';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

function Footer() {
  let { cartPrice } = useCartContext();

  return (
    <div className=' bg-gray-200 h-[86px] pb-10 fixed bottom-0 left-0 right-0 '>
      <div className='pr-4 grid items-center h-[86px] '>
        <div className='flex justify-between '>
          <div className='pl-10 sm:flex sm:flex-col lg:flex-row  sm:w-full  gap-2 font-medium hidden   lg:w-full'>
            <div className='flex items-center  lg:items-start'>
              <div>
                <HiGlobe />
              </div>
              <div className=' lg:pl-4 lg:text-sm'>
                <div className='sm:pl-2 lg:lg:pl-0 lg:font-semibold '>
                  Free Shipping
                </div>
                <div className='hidden lg:flex lg:text-sm'>
                  Get 2-day free shipping anywhere in North America
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='lg:flex  sm:flex'>
                <div className=''>
                  <IoShieldCheckmarkSharp />
                </div>
                <div className=' lg:pl-4'>
                  <div className='pl-2 lg:pl-0 lg:text-sm lg:font-semibold'>
                    2 Year Warranty
                  </div>
                  <div className='hidden lg:flex  lg:text-sm'>
                    If anything goes wrong in the first two years, we'll replace
                    it for free
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex justify-end w-full sm:items-center lg:w-[50%]'>
            <div className=''>
              <div className=' text-3xl font-bold  text-right'>
                {`$${cartPrice}`}
              </div>
              <div className='text-sm hidden sm:flex lg:text-sm'>
                Need a Financing?
                <a href='#'>
                  <div className=' underline underline-offset-1 sm:pl-px lg:text-sm'>
                    Learn More
                  </div>
                </a>
              </div>
            </div>
            <div>
              <button
                type='button'
                className='ml-4 rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shadow-gray'
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Footer;
