import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Container>
            <div className='flex justify-between mt-10'>
                <div className="w-[50%] justify-center my-auto">
                    <h2 className='uppercase text-sm font-bold mb-2 text-blue-600'>meet dreamhost</h2>
                    <h1 className='capitalize font-bold text-4xl mb-4'>web hosting <br />for everyone</h1>
                    <p className='text-lg text-gray-700 mb-6'>We make sure your website is fast, secure & always up - so <br /> your visitors & search engines trust you. Guaranteed.</p>
                    <div className="flex items-start">
                        <Link to="/" className='bg-blue-600 text-white px-5 py-2 rounded-lg capitalize hover:bg-blue-400 text-lg'>get started</Link>
                        <Link to="/" className='hover:underline px-5 py-2 hover:rounded-lg text-blue-600 capitalize text-lg'>more than a website</Link>
                    </div>
                </div>
                <div className="w-[50%]">
                    <img src="hero_ab.webp" alt="hero" className='w-full h-full rounded-lg'/>
                </div>
            </div>
        </Container>
    )
}

export default Hero