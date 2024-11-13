import React from 'react'
import Container from './Container'
import { FaRegStar } from "react-icons/fa6";

const WordpressCustomerReview = () => {
    return (
        <Container>
            <div className="flex flex-col items-start mt-10 mb-[50px]">
                <div className="px-40">
                    <h1 className='text-4xl font-bold mb-4'>What do our <br /> customers say?</h1>
                    <p className="text-lg text-gray-400 mb-12">Trusted by Millions of People & Businesses</p>
                </div>
                <div className="flex justify-center space-x-8">
                    <div className="flex flex-col items-center">
                        <h1 className="text-lg font-normal mb-3">Excellent</h1>
                        <Star />
                        <p className="text-xs text-gray-600 mt-3">Based on 6,551 reviews</p>
                        <div className="flex justify-center items-center mt-3">
                            <span className='bg-green-500 w-[20px] h-[20px] flex justify-center items-center'>
                                <FaRegStar className='text-white' />
                            </span>
                            <p>Trustpilot</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="flex flex-col items-left">
                            <Star/>
                            <p className="text-xs text-gray-600 font-semibold mt-2">Quick and helpful support team</p>
                            <p className='text-xs font-normal mt-2'>The technical support staff ar DreamHost were quick to respond to an issueI was ...</p>
                            <p className='font-light text-xs mt-3'>David Davis, 7 hours ago</p>
                            <p className='font-semibold text-xs mt-3'>Showing our 5 star review </p>
                        </div>
                        <div className="flex flex-col items-left">
                            <Star />
                            <p className="text-xs text-gray-600 font-semibold mt-2">Support was quick and pleasing as usual</p>
                            <p className='text-xs font-normal mt-2'>I've been using DreanHost for years, hosting several domains and websites. This</p>
                            <p className='font-light text-xs mt-3'>mathew hudson, 9 hours ago</p>
                        </div>
                        <div className="flex flex-col items-left">
                            <Star />
                            <p className="text-xs text-gray-600 font-semibold mt-2">Great customer support</p>
                            <p className='text-xs font-normal mt-2'>I loved DreamHost Anytime I've has issue, their support team has gone above a...</p>
                            <p className='font-light text-xs mt-3'>Megan Cash, 9 hours ago</p>
                        </div>
                        <div className="flex flex-col items-left">
                            <Star />
                            <p className="text-xs text-gray-600 font-semibold mt-2">in a world where you grow old waiting</p>
                            <p className='text-xs font-normal mt-2'>In a world where you grow old waiting for customer services, these guys are on it.</p>
                            <p className='font-light text-xs mt-3'>Al Kennedy, 16 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WordpressCustomerReview

const Star = () => {
    return (
        <div className="flex justify-start items-left space-x-1">
            <span className='bg-green-500 w-[20px] h-[20px] flex justify-center items-center'>
                <FaRegStar className='text-white' />
            </span>
            <span className='bg-green-500 w-[20px] h-[20px] flex justify-center items-center'>
                <FaRegStar className='text-white' />
            </span>
            <span className='bg-green-500 w-[20px] h-[20px] flex justify-center items-center'>
                <FaRegStar className='text-white' />
            </span>
            <span className='bg-green-500 w-[20px] h-[20px] flex justify-center items-center'>
                <FaRegStar className='text-white' />
            </span>
            <span className='bg-green-500 w-[20px] h-[20px] flex justify-center items-center'>
                <FaRegStar className='text-white' />
            </span>
        </div>
    )
}