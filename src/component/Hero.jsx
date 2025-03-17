import React from 'react'
import heroImg from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-8'>
      <img className='mb-8 w-48 h-48 rounded-full mx-auto object-cover transform transition-transform duration-300 hover:scale-105' src={heroImg} alt="hero image" />
      <h1 className='text-4xl font-bold'>
        I,m {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Full Stack Developer</span>
      </h1>
      <p className='font-medium text-lg mb-4'>
      I specialize in building modern and responsive web applications
      </p>
      <div className='space-x-6'>
      <button className='bg-gradient-to-r from-green-400 to-blue-400 text-white font-medium text-lg py-2 px-4 border-none rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105'> Contact With</button>

     <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white font-medium text-lg py-2 px-4 border-none rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105'>Resume</button>
      </div>

    </div>
  )
}

export default Hero
