import React from 'react'
import Container from './Container'
import { FaWordpress } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsSpeedometer2 } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowRoundDown } from "react-icons/io";
const UnbeatableWordpressHosting = () => {
    return (
        <div className='bg-black py-10'>
            <Container>
                <div className="flex justify-center items-center px-10 py-5">
                    <div className="left w-1/2">
                        <p className='text-purple-900 bg-purple-400 rounded-lg p-1 max-w-fit text-xs'>Starting at $2.59/mo</p>
                        <h1 className="font-bold capitalize text-6xl mt-3 text-white">
                            unbeatable wordpress hosting
                        </h1>
                        <p className='text-sm mt-5 text-white'>
                            Reliable, lightning-fast hosting solutions specifically optimized for WordPress.
                        </p>
                        <div className="flex justify-center items-center my-10 space-x-5">
                            <div className="">
                                <FaWordpress className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs text-white font-light'>Recommended by WordPress.org</p>
                            </div>
                            <div className="">
                                <FaPeopleGroup className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs text-white font-light'>In-House WordPress Experts</p>
                            </div>
                            <div className="">
                                <BsSpeedometer2 className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs text-white font-light'>WordPress-Optimized Servers</p>
                            </div>
                            <div className="">
                                <RiSecurePaymentLine className='text-white w-[30px] h-[30px] mb-3' />
                                <p className='text-xs text-white font-light'>Trusted by 1.5 Million Websites</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center space-x-5 my-5">
                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                Get Started
                            </button>
                            <button className='text-white font-bold py-2 px-4 rounded-full flex justify-center items-center border-white border-2'>
                                View Plans
                                <IoIosArrowRoundDown className='text-white text-2xl'/>
                            </button>
                        </div>
                    </div>
                    <div className="right w-1/2">
                        <img src="wp_hero_furniture_skew.webp" alt="Furniture Wordpress" className='' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default UnbeatableWordpressHosting