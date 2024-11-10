import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Container>
            <div className='flex justify-between mt-10'>
                <div className="w-[50%] justify-center my-auto">
                    <h2 className='mb-2 text-sm font-bold text-blue-600 uppercase'>meet dreamhost</h2>
                    <h1 className='mb-4 text-4xl font-bold capitalize'>web hosting <br />for everyone</h1>
                    <p className='mb-6 text-lg text-gray-700'>We make sure your website is fast, secure & always up - so <br /> your visitors & search engines trust you. Guaranteed.</p>
                    <div className="flex items-start">
                        <Link to="/" className='px-5 py-2 text-lg text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-400'>get started</Link>
                        <Link to="/" className='px-5 py-2 text-lg text-blue-600 capitalize hover:underline hover:rounded-lg'>more than a website</Link>
                    </div>
                </div>
                <div className="w-[50%]">
                    <img src="hero_ab.webp" alt="hero" className='w-full h-full rounded-lg' />
                </div>
            </div>
        </Container>
    )
}

export default Hero