import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import HotelCard from './HotelCard';
import { hotelsData } from '@/Data/data';


export const Hotel = () => {
  return (
    <div className='pt-20 pb-20' id='hotel'>
     {/*Section heading*/}
        <SectionHeading heading='Recommeded Hotels'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
            {/* Hoteldata */}
              {hotelsData.map((data)=>{
                return <div key={data.id}>
                    
                    <HotelCard hotel={data}/>
                   
               </div>
               })}
        </div>
        
    </div>
  )
}

export default Hotel;

