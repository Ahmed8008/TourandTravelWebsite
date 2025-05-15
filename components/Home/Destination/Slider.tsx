"use client"
import { destinationData } from '@/Data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidestoslides:1,

  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidestoslides:1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidestoslides:1,
  }
};

export const Slider = () => {
  return (
   <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true} >
   {destinationData.map((data)=>{
    return <div key={data.id} className='m-3'>

        {/*Overlay*/}
        <div className='absolute inset-0  opacity-25 rounded-lg'></div>

        {/*Image*/}
     <img
     src={data.image}
     alt={data.country}
     className="w-full h-[300px] object-cover rounded-lg"
      /> 
    
    {/*Text Content*/}
    <h1 className='text-lg font-semibold mt-4'>{data.country}</h1>
    <p className='text-sm text-gray-600'>{data.travelers} Travelers</p>
   </div>
   })}
   </Carousel>
  )
}

export default Slider;

