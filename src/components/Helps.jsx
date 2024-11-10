import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { RxCursorArrow } from "react-icons/rx";
import { RiStackLine } from "react-icons/ri";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";
const Helps = () => {
    return (
        <Container>
            <div className='flex items-center justify-center mb-10'>
                <div className="flex items-center justify-center w-full p-8 rounded-lg shadow-lg">
                    <div className="w-[40%]">
                        <h1 className='mb-5 text-2xl font-bold capitalize'>dreamHost helps you succeed</h1>
                        <p className='mb-10 text-sm text-gray-700'>Grow your website faster by using DreamHost as your foundation.</p>
                        <Link className='px-5 py-2 mt-5 text-white capitalize bg-blue-600 rounded-lg text-md hover:bg-blue_400' to='/'>See our hostings</Link>
                    </div>
                    <div className="w-[60%] grid grid-cols-2">
                        <Card>
                            <RxCursorArrow className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="mb-2 text-lg font-bold capitalize">super easy to use</h2>
                            <p className='text-gray-600 text-wrap'>Our custom control panel is simple to use and removes the headache of managing your web hosting.</p>
                        </Card>
                        <Card>
                            <RiStackLine className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="mb-2 text-lg font-bold capitalize">Full Featured</h2>
                            <p className='text-gray-600 text-wrap'>We do more than web hosting. Our tool suite includes everything you need to be successful.</p>
                        </Card>
                        <Card>
                            <TbBrandSpeedtest className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="mb-2 text-lg font-bold capitalize">Fast & Reliable</h2>
                            <p className='text-gray-600 text-wrap'>If your website is slow or down, then you are losing customers, conversion and search engine rankings.</p>
                        </Card>
                        <Card>
                            <FaRegHandshake className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="mb-2 text-lg font-bold capitalize">24/7 Expert Support</h2>
                            <p className='text-gray-600 text-wrap'>Our award-winning US-based experts are available to help when you get stuck — anytime, day or night.</p>
                        </Card>
                    </div>
                </div>

            </div>
        </Container>
    )
}
const Card = ({ children }) => {
    return (
        <div className="flex flex-col px-4 py-2 mb-3 space-x-1 items-left">
            {children}
        </div>
    )
}
export default Helps