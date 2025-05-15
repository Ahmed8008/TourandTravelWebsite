import React from 'react'
import { FaHeartbeat } from 'react-icons/fa';
import Image from 'next/image';

type Props={
    hotel:{
        id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;  
    }
}

export const HotelCard = ( {hotel}:Props) => {
  return (
    
     <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>

  {/* Add to favourite button */}
  <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center'>
    <FaHeartbeat className='w-3 h-3' />
  </div>

  {/* Overlay */}
  <div className='absolute inset-0 bg-black opacity-20 z-10'></div>

  {/* Image */}
  <Image 
    src={hotel.image}
    alt={hotel.name}
    width={500}
    height={500}
    className='h-full w-full object-cover transition-all duration-300 group-hover:scale-110'
  />

  {/* Content - place this absolute so it's on top */}
  <div className='absolute bottom-4 left-4 z-20'>
    <h1 className='text-lg font-semibold text-white hover:text-yellow-300 cursor-pointer transition-all duration-200'>
      {hotel.name}
    </h1>
    <p className='text-sm text-white mt-1 font-medium'>
      {hotel.location}
    </p>
    <p className='text-sm text-white mt-1 font-medium'>
     Rating {hotel.rating}
    </p>
    
  </div>

</div>

  )
}

export default HotelCard;

