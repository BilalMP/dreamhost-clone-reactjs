import React from 'react'
import Container from './Container'
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { MdCodeOff } from "react-icons/md";
import { BiSolidCustomize } from "react-icons/bi";

const WebsiteHero = () => {
    return (
        <div className="mt-10 bg-black py-10">
            <Container>
                <div className="flex justify-center items-center text-white">
                    <div className="left w-[500px]">
                        <h1 className='text-6xl font-bold'>Liftoff Website Builder</h1>
                        <p className='mt-5 font-normal'>Launch your website in 60 seconds with AI.</p>
                        <div className="flex items-center justify-start my-5 space-x-5">
                            <button className='px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
                                Get Started
                            </button>
                            <button className='flex items-center justify-center px-4 py-2 font-bold text-white border-2 border-white rounded-lg'>
                                View Plans
                                <IoIosArrowRoundDown className='text-2xl text-white' />
                            </button>
                        </div>
                    </div>
                    <div className="right w-1/2 flex justify-center items-center">
                        <img src="hero.webp" alt="Ai website builder hero" className='w-[600px] h-[500px]' />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-black text-white mt-10">
                    <div className="flex flex-col justify-start items-start mr-[50px]">
                        <FaServer className='text-white text-xl'/>
                        <p className='text-xs mt-3'>Free with hosting</p>
                    </div>
                    <div className="flex flex-col justify-start items-start mr-[50px]">
                        <GiStarFormation className='text-white text-xl' />
                        <p className='text-xs mt-3'>AI Powered</p>
                    </div>
                    <div className="flex flex-col justify-start items-start mr-[50px]">
                        <MdCodeOff className='text-white text-xl' />
                        <p className='text-xs mt-3'>No coding needed</p>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <BiSolidCustomize className='text-white text-xl' />
                        <p className='text-xs mt-3'>Completely Personalized</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WebsiteHero