import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import Slider from './Slider';


export const Destination = () => {
  return (
    <div className='pt-20 pb-20' id='destination'>
        {/*Section Heading */}
       <SectionHeading heading='Exploring Popular Destination'/>
       {/* Section Content */}
       <div className='mt-14 w-[80%] mx-auto'>
        {/*Slider*/}
        <Slider/>
       </div>
    </div>
  )
}

export default Destination;

