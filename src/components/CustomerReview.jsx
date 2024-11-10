import React from 'react'
import Container from './Container'
import { FaStar } from "react-icons/fa6";
const CustomerReview = () => {
    return (
        <Container>
            <div className='flex justify-center items-center shadow-md rounded-lg mb-10 h-[80px] space-x-10'>
                <span className="mr-4 capitalize textgray-600">Our customer says</span>
                <span className="mr-4 font-semibold text-green-500">Excellent</span>
                <div className="flex items-center mr-4">
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                    <FaStar className='text-white bg-green-600 w-[20px] h-[20px] mr-1 px-0.5' />
                </div>
                <span className="mr-2 text-gray-600">4.7 out of 5 based on 6,513 reviews</span>
                <div className="flex items-center justify-center">
                    <FaStar className='text-green-600' />
                    <span className="mr-4 text-green-600 capitalize">trustpilot</span>
                </div>
            </div>
        </Container>
    )
}

export default CustomerReview