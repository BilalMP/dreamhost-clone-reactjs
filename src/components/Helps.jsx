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
            <div className='flex justify-center items-center mb-10'>
                <div className="rounded-lg shadow-lg p-8 w-full flex justify-center items-center">
                    <div className="w-[40%]">
                        <h1 className='capitalize text-2xl font-bold mb-5'>dreamHost helps you succeed</h1>
                        <p className='text-sm text-gray-700 mb-10'>Grow your website faster by using DreamHost as your foundation.</p>
                        <Link className='capitalize bg-blue-600 text-white text-md hover:bg-blue_400 px-5 py-2 rounded-lg mt-5' to='/'>See our hostings</Link>
                    </div>
                    <div className="w-[60%] grid grid-cols-2">
                        <Card>
                            <RxCursorArrow className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="text-lg capitalize font-bold mb-2">super easy to use</h2>
                            <p className='text-wrap text-gray-600'>Our custom control panel is simple to use and removes the headache of managing your web hosting.</p>
                        </Card>
                        <Card>
                            <RiStackLine className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="text-lg capitalize font-bold mb-2">Full Featured</h2>
                            <p className='text-wrap text-gray-600'>We do more than web hosting. Our tool suite includes everything you need to be successful.</p>
                        </Card>
                        <Card>
                            <TbBrandSpeedtest className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="text-lg capitalize font-bold mb-2">Fast & Reliable</h2>
                            <p className='text-wrap text-gray-600'>If your website is slow or down, then you are losing customers, conversion and search engine rankings.</p>
                        </Card>
                        <Card>
                            <FaRegHandshake className='text-blue-600 w-[50px] h-[50px] mb-2' />
                            <h2 className="text-lg capitalize font-bold mb-2">24/7 Expert Support</h2>
                            <p className='text-wrap text-gray-600'>Our award-winning US-based experts are available to help when you get stuck — anytime, day or night.</p>
                        </Card>
                    </div>
                </div>

            </div>
        </Container>
    )
}
const Card = ({ children }) => {
    return (
        <div className="flex flex-col items-left space-x-1 px-4 py-2 mb-3">
            {children}
        </div>
    )
}
export default Helps