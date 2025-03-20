"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const Hero = () => {
  const handleScroll  = () =>{}
  
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
    <h1 className='hero__title'>
    Join us and find the perfect course for you!
    </h1>
    <p className='hero__subtitle'>Welcome to our online learning platform!<br/> Explore expert-led courses tailored to your needs and learn at your own pace, anytime, anywhere.</p>
    
    <CustomButton
    title="Explore More"
    containerStyles="bg-indigo-900 hover:bg-fuchsia-500  text-white rounded-full mt-10"
    handleClick={handleScroll}
    />
    </div>

    <div className='hero__image-container'>
      <div className='hero__image'>
      <Image src="/hero1.png" alt="My Image" fill className='object-contain'/> 
      
      </div>
    </div>
    </div>
  )
}

export default Hero
