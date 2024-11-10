import React from 'react'
import Container from './Container'
import { FaWordpressSimple } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaServer } from "react-icons/fa";

const PopularServices = () => {
    return (
        <Container>
            <div className='grid grid-cols-3 gap-10'>
                <WordpressHosting />
                <WebsiteHostig />
                <ManagedVirtualPrivateServer />
                <DedicatedHosting />
                <CloudHosting />
                <VPSHosting />
            </div>
        </Container >
    )
}

const WordpressHosting = () => {
    return (
        < div className='flex flex-col justify-center justify-items-start rounded-lg shadow-2xl py-5 px-5 h-[300px]' >
            <FaWordpressSimple className='text-blue-600 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>wordpress hosting</h1>
            <p className="text-sm text-gray-700">Get up and running fast with Wordpress Optimised for perfermoance and preconfigured for easy maintenance</p>
            <div className="flex items-center mt-5 justify-left">
                <p className='font-bold'>Starting at $16.96/mo</p>
                <MdOutlineArrowRightAlt className='ml-2 text-3xl text-blue-600' />
            </div>
        </ div >
    )
}

const WebsiteHostig = () => {
    return (
        < div className='flex flex-col justify-center justify-items-start rounded-lg shadow-2xl py-5 px-5 h-[300px]' >
            <MdPeople className='text-blue-600 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>website hosting</h1>
            <p className="text-sm text-gray-700">Shared Website Hosting gives you a free domain name, fast SSD storage and email hosting for your website</p>
            <div className="flex items-center mt-5 justify-left">
                <p className='font-bold'>Starting at $2.59/mo</p>
                <MdOutlineArrowRightAlt className='ml-2 text-3xl text-blue-600' />
            </div>
        </ div >
    )
}

const DedicatedHosting = () => {
    return (
        < div className='flex flex-col justify-center justify-items-start rounded-lg shadow-2xl py-5 px-5 h-[300px]' >
            <IoSpeedometerOutline className='text-blue-600 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>dedicated hosting</h1>
            <p className="text-sm text-gray-700">Fast web servers to run your applications with root access and a 100% Uptime Guarantee</p>
            <div className="flex items-center mt-5 justify-left">
                <p className='font-bold'>Starting at $199.00/mo</p>
                <MdOutlineArrowRightAlt className='ml-2 text-3xl text-blue-600' />
            </div>
        </ div >
    )
}

const CloudHosting = () => {
    return (
        < div className='flex flex-col justify-center justify-items-start rounded-lg shadow-2xl py-5 px-5 h-[300px]' >
            <AiOutlineCloudServer className='text-blue-600 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>cloud hosting</h1>
            <p className="text-sm text-gray-700">Lighting-fast servers with root access, SSD storage and blazing-fast networking powered by open APIs through OpenStack</p>
            <div className="flex items-center mt-5 justify-left">
                <p className='font-bold'>Starting at $0.0075/mo</p>
                <MdOutlineArrowRightAlt className='ml-2 text-3xl text-blue-600' />
            </div>
        </ div >
    )
}

const VPSHosting = () => {
    return (
        < div className='flex flex-col justify-center justify-items-start rounded-lg shadow-2xl py-5 px-5 h-[300px]' >
            <FaServer className='text-blue-600 w-[50px] h-[50px]' />
            <h1 className='my-5 text-lg font-bold capitalize'>VPS hosting</h1>
            <p className="text-sm text-gray-700">Virtual Privaye Servers with ultra fast SSD and flexibility with HTTP/2, Ubuntu, IPv6, Nginx, Node.js and more</p>
            <div className="flex items-center mt-5 justify-left">
                <p className='font-bold'>Starting at $10.00/mo</p>
                <MdOutlineArrowRightAlt className='ml-2 text-3xl text-blue-600' />
            </div>
        </ div >
    )
}

const ManagedVirtualPrivateServer = () => {
    return (
        < div className='flex flex-col justify-center justify-items-start rounded-lg shadow-2xl py-5 px-5 h-[300px]' >
            <h1 className='my-5 text-lg font-bold capitalize'>Managed Virtual Private Servers</h1>
            <p className="text-sm text-gray-700">Expect More From Your Website or App</p>
        </ div >
    )
}
export default PopularServices

