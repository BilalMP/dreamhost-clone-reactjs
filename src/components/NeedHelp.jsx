import React from 'react'
import Container from './Container'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const NeedHelp = () => {
    return (
        <div className="bg-black text-white">
            <Container>
                <div className="my-10 mx-10">
                    <h1 className="font-bold capitalize text-lg">
                        Need some help?
                    </h1>
                    <p className='text-sm font-light mt-5'>
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
        <div className="flex flex-col justify-start rounded-lg bg-gray-950 p-10 mt-10">
            <IoChatbubbleEllipsesOutline className='text-blue-700 w-[50px] h-[50px]' />
            <h1 className='capitalize font-bold text-lg my-5'>DreamHost sales help</h1>
            <p className='font-light text-sm mt-2'>24/7/365 Through the Chat Widget</p>
            <div className='capitalize flex items-center mt-5 justify-start space-x-3'>
                <span>chat now</span>
                <GoArrowRight />
            </div>
        </div>
    )
}

const CustomerSupportChat = () => {
    return (
        <div className="flex flex-col justify-start rounded-lg bg-gray-950 p-10 mt-10">
            <MdPeopleOutline className='text-purple-700 w-[50px] h-[50px]' />
            <h1 className='capitalize font-bold text-lg my-5'>Customer Support Chat</h1>
            <p className='font-light text-sm mt-2'>24/7/365 Through the Panel</p>
            <div className='capitalize flex items-center mt-5 justify-start space-x-3'>
                <span>go to panel</span>
                <GoArrowRight />
            </div>
        </div>
    )
}

const CustomerSupportEmail = () => {
    return (
        <div className="flex flex-col justify-start rounded-lg bg-gray-950 p-10 mt-10">
            <TfiEmail className='text-green-700 w-[50px] h-[50px]' />
            <h1 className='capitalize font-bold text-lg my-5'>Customer Support Email</h1>
            <p className='font-light text-sm mt-2'>24/7/365 Through the Panel</p>
            <div className='capitalize flex items-center mt-5 justify-start space-x-3'>
                <span>go to panel</span>
                <GoArrowRight />
            </div>
        </div>
    )
}
export default NeedHelp