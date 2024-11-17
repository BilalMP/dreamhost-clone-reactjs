import React from 'react'
import Container from './Container'
import { FaArrowDown } from "react-icons/fa6";

const ProServicesHero = () => {
  return (
    <div className='bg-black text-white py-10'>
      <Container>
        <div className="flex justify-center items-center">
          <div className="left w-1/2">
            <h1 className='font-bold text-6xl'>
              Web Pros
              At Your Service
            </h1>
            <p className='font-light text-md mt-10 w-[500px]'>
              Tap into our experience powering millions of websites for over 20 years. You've got big dreams – we can help you get there, fast.
            </p>
            <button className='px-5 py-2 text-white capitalize bg-blue-600 rounded-lg flex justify-center items-center mt-10'>
              <p className='capitalize font-semibold mr-3'>Explore the services </p>
              <FaArrowDown />
            </button>
          </div>
          <div className="right w-1/2 mr-10">
            <img src="/hero_proservices.webp" alt="hero pro services" className='rounded-xl'/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProServicesHero