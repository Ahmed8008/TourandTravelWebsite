import React from 'react'
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoose from './WhyChoose/WhyChoose';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';

export const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Destination/>
        <Hotel/>
        <WhyChoose/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home;

