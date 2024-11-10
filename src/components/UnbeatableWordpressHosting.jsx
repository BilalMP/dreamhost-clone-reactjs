import React from 'react'
import Container from './Container'
import { FaWordpress } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsSpeedometer2 } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowRoundDown } from "react-icons/io";
const UnbeatableWordpressHosting = () => {
    return (
        <div className='py-10 bg-black'>
            <Container>
                <div className="flex items-center justify-center px-10 py-5">
                    <div className="w-1/2 left">
                        <p className='p-1 text-xs text-purple-900 bg-purple-400 rounded-lg max-w-fit'>Starting at $2.59/mo</p>
                        <h1 className="mt-3 text-6xl font-bold text-white capitalize">
                            unbeatable wordpress hosting
                        </h1>
                        <p className='mt-5 text-sm text-white'>
                            Reliable, lightning-fast hosting solutions specifically optimized for WordPress.
                        </p>
                        <div className="flex items-center justify-center my-10 space-x-5">
                            <div className="">
                                <FaWordpress className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs font-light text-white'>Recommended by WordPress.org</p>
                            </div>
                            <div className="">
                                <FaPeopleGroup className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs font-light text-white'>In-House WordPress Experts</p>
                            </div>
                            <div className="">
                                <BsSpeedometer2 className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs font-light text-white'>WordPress-Optimized Servers</p>
                            </div>
                            <div className="">
                                <RiSecurePaymentLine className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs font-light text-white'>Trusted by 1.5 Million Websites</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start my-5 space-x-5">
                            <button className='px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700'>
                                Get Started
                            </button>
                            <button className='flex items-center justify-center px-4 py-2 font-bold text-white border-2 border-white rounded-full'>
                                View Plans
                                <IoIosArrowRoundDown className='text-2xl text-white' />
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 right">
                        <img src="wp_hero_furniture_skew.webp" alt="Furniture Wordpress" className='' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default UnbeatableWordpressHosting