import React from 'react'
import Container from './Container'
import { GoArrowRight } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa6";

const MoveFaster = () => {
    return (
        <Container>
            <div className="flex items-center justify-center px-10 my-10">
                <div className="w-1/2 left">
                    <h1 className='text-4xl font-bold'>Ready to move <br />faster?</h1>
                    <p className='mt-5 font-light'>
                        We make it easy to tap into 20+ years of experience – our <br />
                        web experts will tackle whatever you need for a <br />
                        successful site.
                    </p>
                    <button className='flex items-center justify-start px-5 py-2 mt-5 space-x-5 font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-500'>
                        <span>Learn more</span>
                        <GoArrowRight />
                    </button>
                </div>
                <div className="grid w-1/2 grid-cols-2 gap-10 right">
                    <WebDesign />
                    <SiteManagement />
                    <SEOMarketing />
                    <WebDevelopment />
                </div>
            </div>
        </Container>
    )
}

const WebDesign = () => {
    return (
        <div className="flex flex-col p-5 shadow-xl rounded-2xl">
            <CgWebsite className='text-blue-700 w-[100px] h-[50px]' />
            <div className="flex items-center justify-between mt-5 mx-7">
                <p className='font-semibold'>Web <br /> Design</p>
                <GoArrowRight />
            </div>
        </div>
    )
}

const SiteManagement = () => {
    return (
        <div className="flex flex-col p-5 shadow-xl rounded-2xl">
            <CgWebsite className='text-green-700 w-[100px] h-[50px]' />
            <div className="flex items-center justify-between mt-5 mx-7">
                <p className='font-semibold'>Site <br /> Management</p>
                <GoArrowRight />
            </div>
        </div>
    )
}

const SEOMarketing = () => {
    return (
        <div className="flex flex-col p-5 shadow-xl rounded-2xl">
            <FaChartLine className='text-purple-700 w-[100px] h-[50px]' />
            <div className="flex items-center justify-between mt-5 mx-7">
                <p className='font-semibold'>SEO <br /> Marketing</p>
                <GoArrowRight />
            </div>
        </div>
    )
}

const WebDevelopment = () => {
    return (
        <div className="flex flex-col p-5 shadow-xl rounded-2xl">
            <CgWebsite className='text-blue-700 w-[100px] h-[50px]' />
            <div className="flex items-center justify-between mt-5 mx-7">
                <p className='font-semibold'>Web <br /> Development</p>
                <GoArrowRight />
            </div>
        </div>
    )
}
export default MoveFaster