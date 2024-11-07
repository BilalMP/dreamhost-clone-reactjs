import React from 'react'
import Container from './Container'
import { FaStar } from "react-icons/fa6";
const CustomerReview = () => {
    return (
        <Container>
            <div className='flex justify-center items-center shadow-md rounded-lg mb-10 h-[80px] space-x-10'>
                <span className="textgray-600 mr-4 capitalize">Our customer says</span>
                <span className="text-green-500 font-semibold mr-4">Excellent</span>
                <div className="flex items-center mr-4">
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                </div>
                <span className="text-gray-600 mr-2">4.7 out of 5 based on 6,513 reviews</span>
                <div className="flex justify-center items-center">
                    <FaStar className='text-green-600' />
                    <span className="capitalize text-green-600 mr-4">trustpilot</span>
                </div>
            </div>
        </Container>
    )
}

export default CustomerReview