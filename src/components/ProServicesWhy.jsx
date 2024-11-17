import React from 'react'
import Container from './Container'
import { TbBrandSpeedtest } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { BsChatRightText } from "react-icons/bs";

const ProServices = () => {
    return (
        <div className='bg-black text-white'>
            <Container>
                <div className="flex justify-center items-center py-10">
                    <div className="left w-1/3 border-r-8 border-blue-700">
                        <h1 className='font-bold text-6xl w-[400px]'>
                            Why DreamHost Pro Services
                        </h1>
                        <p className='font-light text-md mt-5'>
                            We do the heavy lifting so you can focus on building your business.
                        </p>
                    </div>
                    <div className="right w-2/3 grid grid-cols-2 gap-5">
                        <Card icon={<TbBrandSpeedtest className='text-6xl text-blue-600' />} title="20+ Years Experience" description="Tap into our experience powering millions of websites for over two decades to level up your own projects." />
                        <Card icon={<AiOutlineDollar className='text-6xl text-green-600' />} title="Crazy Affordable" description="We care about your success and our goal is to make world-class services more accessible and affordable." />
                        <Card icon={<HiOutlineHandThumbUp className='text-6xl text-purple-600' />} title="Satisfaction Guaranteed" description="Your dream is our business – we ensure every project is reviewed and approved by you every step of the way." />
                        <Card icon={<BsChatRightText className='text-6xl text-orange-600' />} title="Legendary Support" description="Just ask around and you’ll quickly realize there’s a reason we have customers for 20+ years." />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProServices

const Card = ({ icon, title, description }) => {
    return (
        <div className="text-white px-10 py-5">
            <div className="flex justify-start items-center space-x-5">
                {icon}
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
            <p className='font-medium mt-3'>{description}</p>
        </div>
    )
}