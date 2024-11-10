import React from 'react'
import Container from './Container'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const NeedHelp = () => {
    return (
        <div className="text-white bg-black">
            <Container>
                <div className="mx-10 my-10">
                    <h1 className="text-lg font-bold capitalize">
                        Need some help?
                    </h1>
                    <p className='mt-5 text-sm font-light'>
                        Whether you're stuck or just want some tips on where to start, hit up our experts anytime. We're here to help!
                    </p>
                    <div className="grid grid-cols-3 gap-10">
                        <SalesHelp />
                        <CustomerSupportChat />
                        <CustomerSupportEmail />
                    </div>
                </div>
            </Container>
        </div>
    )
}

const SalesHelp = () => {
    return (
        <div className="flex flex-col justify-start p-10 mt-10 rounded-lg bg-gray-950">
            <IoChatbubbleEllipsesOutline className='text-blue-700 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>DreamHost sales help</h1>
            <p className='mt-2 text-sm font-light'>24/7/365 Through the Chat Widget</p>
            <div className='flex items-center justify-start mt-5 space-x-3 capitalize'>
                <span>chat now</span>
                <GoArrowRight />
            </div>
        </div>
    )
}

const CustomerSupportChat = () => {
    return (
        <div className="flex flex-col justify-start p-10 mt-10 rounded-lg bg-gray-950">
            <MdPeopleOutline className='text-purple-700 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>Customer Support Chat</h1>
            <p className='mt-2 text-sm font-light'>24/7/365 Through the Panel</p>
            <div className='flex items-center justify-start mt-5 space-x-3 capitalize'>
                <span>go to panel</span>
                <GoArrowRight />
            </div>
        </div>
    )
}

const CustomerSupportEmail = () => {
    return (
        <div className="flex flex-col justify-start p-10 mt-10 rounded-lg bg-gray-950">
            <TfiEmail className='text-green-700 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>Customer Support Email</h1>
            <p className='mt-2 text-sm font-light'>24/7/365 Through the Panel</p>
            <div className='flex items-center justify-start mt-5 space-x-3 capitalize'>
                <span>go to panel</span>
                <GoArrowRight />
            </div>
        </div>
    )
}
export default NeedHelp