import React from 'react'
import Container from './Container'
import { BsChatRightText } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

const ProServicesChat = () => {
    return (
        <div>
            <Container>
                <div className="flex justify-center items-center py-10">
                    <div className="left w-1/2">
                        <img src="/light.webp" alt="light" className='rounded-3xl' />
                    </div>
                    <div className="right w-1/2 flex flex-col pl-10 justify-start items-start">
                        <h1 className='text-6xl font-bold w-[400px]'>
                            Chat with a
                            Web Expert
                        </h1>
                        <p className='font-medium mt-5'>
                            We'll answer your questions and share recommendations on how to create a stunning, successful site for your business.
                        </p>
                        <div className="flex justify-center items-center mt-10 space-x-5">
                            <button className='bg-blue-700 border-4 border-blue-700 text-white flex justify-center items-center px-3 py-2 rounded-lg space-x-3'>
                                <BsChatRightText className='text-3xl' />
                                <p className='text-2xl capitalize'>Chat with us</p>
                            </button>
                            <button className='border-4 border-black flex justify-center items-center px-3 py-2 rounded-lg space-x-3'>
                                <FaRegCalendarAlt className='text-3xl' />
                                <p className='text-2xl capitalize'>schedule a free consultation</p>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProServicesChat